import { utils } from '@liskhq/lisk-transactions';
import io from 'socket.io-client';
import * as popsicle from 'popsicle';
import { DEFAULT_LIMIT } from '../../../constants/monitor';
import { getNetworkNameBasedOnNethash } from '../../getNetwork';
import { getTimestampFromFirstBlock } from '../../datetime';
import i18n from '../../../i18n';
import voting from '../../../constants/voting';
import { adaptTransactions } from './adapters';
import transactionTypes from '../../../constants/transactionTypes';
import store from '../../../store';

const formatDate = (value, options) => getTimestampFromFirstBlock(value, 'DD.MM.YY', options);

const liskServiceGet = ({
  path, transformResponse = x => x, searchParams = {},
}) => new Promise((resolve, reject) => {
  const { network } = store.getState();
  if (!network.serviceUrl) {
    reject(new Error('Lisk Service is not available for this network.'));
  } else {
    popsicle.get(`${network.serviceUrl}${path}?${new URLSearchParams(searchParams)}`)
      .use(popsicle.plugins.parse('json'))
      .then((response) => {
        if (response.statusType() === 2) {
          resolve(transformResponse(response.body));
        } else {
          reject(new Error(response.body.message || response.body.error));
        }
      }).catch((error) => {
        if (error.code === 'EUNAVAILABLE') {
          const networkName = getNetworkNameBasedOnNethash(network);
          error = new Error(i18n.t('Unable to connect to {{networkName}}', { networkName }));
        }
        reject(error);
      });
  }
});

const liskServiceApi = {
  getPriceTicker: () =>
    liskServiceGet({
      path: '/api/v1/market/prices',
      transformResponse: response => response.data,
    }),

  getNewsFeed: () =>
    liskServiceGet({ path: '/api/newsfeed' }),

  getLastBlocks: async (
    networkConfig, { dateFrom, dateTo, ...searchParams },
  ) => liskServiceGet({
    path: '/api/v1/blocks',
    transformResponse: response => response.data,
    searchParams: {
      limit: DEFAULT_LIMIT,
      ...searchParams,
      ...(dateFrom && { from: formatDate(dateFrom) }),
      ...(dateTo && { to: formatDate(dateTo, { inclusive: true }) }),
    },
  }),

  getBlockDetails: async (networkConfig, { id }) => liskServiceGet({
    path: `/api/v1/block/${id}`,
  }),

  getTransactions: async (networkConfig, {
    dateFrom, dateTo, amountFrom, amountTo, ...searchParams
  }) => liskServiceGet({
    path: '/api/v1/transactions',
    transformResponse: response => adaptTransactions(response).data,
    searchParams: {
      limit: DEFAULT_LIMIT,
      ...(dateFrom && { from: formatDate(dateFrom) }),
      ...(dateTo && { to: formatDate(dateTo, { inclusive: true }) }),
      ...(amountFrom && { min: utils.convertLSKToBeddows(amountFrom) }),
      ...(amountTo && { max: utils.convertLSKToBeddows(amountTo) }),
      ...searchParams,
    },
  }),

  getBlockTransactions: async (networkConfig, { id, ...searchParams }) => liskServiceGet({
    path: `/api/v1/block/${id}/transactions`,
    searchParams: { limit: DEFAULT_LIMIT, ...searchParams },
  }),

  getStandbyDelegates: async (networkConfig, {
    offset = 0, tab, ...searchParams
  }) => liskServiceGet({
    path: '/api/v1/delegates',
    transformResponse: response => response.data.filter(
      delegate => delegate.rank > voting.numberOfActiveDelegates,
    ),
    searchParams: {
      offset: offset + (Object.keys(searchParams).length ? 0 : voting.numberOfActiveDelegates),
      limit: DEFAULT_LIMIT,
      ...searchParams,
    },
  }),

  getActiveDelegates: async (networkConfig, { search = '', tab, ...searchParams }) => liskServiceGet({
    path: '/api/v1/delegates/next_forgers',
    transformResponse: response => response.data.filter(
      delegate => delegate.username.includes(search),
    ),
    searchParams: {
      limit: voting.numberOfActiveDelegates,
      ...searchParams,
    },
  }),

  /**
   * Returns lisk-service URL based on network name and nethash
   *
   * In particular it resolves mainnet/testnet nethash to coresponding lisk-service instance
   *
   * @param {Object} networkConfig  - structured as network store: src/store/reducers/network.js
   * @param {String} networkConfig.name
   * @param {String} networkConfig.networks.LSK.nethash - if name is "Custom node"
   * @return {String} lisk-service URL
   */
  getLiskServiceUrl: networkConfig => networkConfig.serviceUrl,

  getActiveAndStandByDelegates: async () => liskServiceGet({
    path: '/api/v1/delegates',
    searchParams: { limit: 1 },
    transformResponse: response => response.meta,
  }),

  getRegisteredDelegates: async () => liskServiceGet({
    path: '/api/v1/transactions',
    searchParams: {
      limit: 100,
      type: transactionTypes().registerDelegate.outgoingCode,
      sort: 'timestamp:desc',
    },
    transformResponse: response => response.data,
  }),

  getNextForgers: async (networkConfig, searchParams) => liskServiceGet({
    path: '/api/v1/delegates/next_forgers',
    searchParams: { limit: DEFAULT_LIMIT, ...searchParams },
    transformResponse: response => response.data,
  }),

  getTopAccounts: async (networkConfig, searchParams) => liskServiceGet({
    path: '/api/v1/accounts/top',
    searchParams: {
      limit: DEFAULT_LIMIT,
      ...searchParams,
    },
  }),

  getNetworkStatus: async () => liskServiceGet({
    path: '/api/v1/network/status',
  }),

  listenToBlockchainEvents: ({ event, callback }) => {
    const { network } = store.getState();
    const socket = io(
      `${network.serviceUrl}/blockchain`,
      { transports: ['websocket'] },
    );
    socket.on(event, callback);

    return function cleanUp() {
      socket.close();
    };
  },

  getTxStats: (networkConfig, searchParams) => {
    const config = {
      week: { path: 'day', limit: 7 },
      month: { path: 'month', limit: 6 },
      year: { path: 'month', limit: 12 },
    };
    return liskServiceGet({
      path: `/api/v1/transactions/statistics/${config[searchParams.period].path}`,
      searchParams: { limit: config[searchParams.period].limit },
    });
  },
};

export default liskServiceApi;
