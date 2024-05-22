import { selectCurrentHWDevice } from '@hardwareWallet/store/selectors/hwSelectors';

const selectActiveToken = (state) => state.token.active;
const selectKLYAddress = (state) =>
  state.wallet.info ? state.wallet.info.KLY.summary.address : undefined;
const selectTransactions = (state) => state.transactions;
const selectActiveTokenAccount = (state) => {
  if (!state.wallet.info) {
    return {};
  }
  return {
    ...state.wallet.info[state.token.active],
    loginType: state.wallet.loginType,
  };
};

const selectCurrentAccountWithSigningData = (state) => {
  if (state.account?.current?.hw) {
    const currentHWDevice = selectCurrentHWDevice(state);
    const accountWithUpdatedHw = {
      ...state.account?.current,
      hw: {
        ...currentHWDevice,
      },
    };

    return accountWithUpdatedHw;
  }

  return selectActiveTokenAccount(state);
};

const selectSettings = (state) => state.settings;
const selectNetwork = (state) => state.network;
const selectNetworkName = (state) => state.network.name;
const selectStaking = (state) => state.staking;
const selectModuleCommandSchemas = (state) => state.network.networks?.KLY?.moduleCommandSchemas;
const selectBookmarks = (state) => state.bookmarks;
const selectCurrentBlockchainApplication = (state) => state.blockChainApplications.current;

export {
  selectStaking,
  selectNetwork,
  selectSettings,
  selectActiveToken,
  selectTransactions,
  selectKLYAddress,
  selectActiveTokenAccount,
  selectNetworkName,
  selectModuleCommandSchemas,
  selectBookmarks,
  selectCurrentBlockchainApplication,
  selectCurrentAccountWithSigningData,
};
