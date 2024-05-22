import wallets from './wallets';
import savedAccounts from '../fixtures/accounts';
import moduleCommandSchemas from './schemas';

export default {
  wallet: {
    info: {
      KLY: {
        ...wallets.genesis,
      },
    },
  },
  bookmarks: {
    KLY: [],
  },
  service: {
    priceTicker: {
      KLY: {
        USD: 1,
      },
    },
  },
  settings: {
    currency: 'USD',
    darkMode: false,
  },
  token: {
    active: 'KLY',
    list: {
      KLY: true,
    },
  },
  network: {
    name: 'Testnet',
    networks: {
      KLY: {
        serviceUrl: 'http://example.com',
        moduleCommandSchemas,
      },
    },
    statue: {
      online: true,
    },
  },
  staking: {
    validators: [],
    stakes: {},
  },
  appUpdates: {},
  transactions: {
    signedTransaction: {},
    txSignatureError: null,
    txBroadcastError: null,
  },
  account: {
    current: savedAccounts[0],
    list: savedAccounts,
  },
  blockChainApplications: {
    pins: [],
    applications: {},
    current: {
      chainName: 'klayr',
      chainID: '04000000',
      networkType: 'devnet',
      serviceURLs: [{ http: 'http://devnet-service.klayr.xyz:9901' }],
    },
  },
};
