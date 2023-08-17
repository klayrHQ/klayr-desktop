export const mockNetworkStatus = {
  data: {
    version: '4.0.0-alpha.0',
    networkVersion: '1.0',
    chainID: '04000000',
    networkIdentifier: '1212931cc3e3d52f0632a668341d3da38063d6e055afc43ceb4b108b11592ef4',
    lastBlockID: '8b920dfc41cf60ec9b5ef7a31bbd4edc4ac20260e2645b0d8bfead4142d0b11f',
    height: 411,
    finalizedHeight: 262,
    syncing: false,
    unconfirmedTransactions: 0,
    genesis: {
      communityIdentifier: 'Lisk',
      maxTransactionsSize: 15360,
      minFeePerByte: 1000,
      blockTime: 10,
      bftBatchSize: 103,
    },
    registeredModules: ['token', 'reward', 'validators', 'auth', 'pos', 'fee', 'random', 'legacy'],
    moduleCommands: [
      { id: '00000002:00000000', name: 'token:transfer' },
      { id: '00000002:00000000', name: 'token:crossChaintransfer' },
      { id: '0000000c:00000000', name: 'auth:registerMultisignature' },
      { id: '0000000d:00000000', name: 'pos:registerValidator' },
      { id: '0000000d:00000003', name: 'pos:reportValidatorMisbehavior' },
      { id: '0000000d:00000002', name: 'pos:unlockToken' },
      { id: '0000000d:00000004', name: 'pos:updateGeneratorKey' },
      { id: '0000000d:00000001', name: 'pos:stakeValidator' },
      { id: '00008000:00000000', name: 'legacy:reclaimLSK' },
      { id: '00008000:00000001', name: 'legacy:registerkeys' },
    ],
    network: {
      port: 7667,
      hostIp: '127.0.0.1',
      seedPeers: [{ ip: '127.0.0.1', port: 7667 }],
      blacklistedIPs: [],
      fixedPeers: [],
      whitelistedPeers: [],
    },
  },
  meta: {
    lastUpdate: 1659704150,
    lastBlockHeight: 411,
    lastBlockID: '8b920dfc41cf60ec9b5ef7a31bbd4edc4ac20260e2645b0d8bfead4142d0b11f',
  },
};
