const blockchainApplicationsExplore = [
  {
    chainName: 'Klayr',
    chainID: '00000001',
    status: 'active',
    apis: [{ rest: 'https://service.klayr.xyz', rpc: 'wss://service.klayr.xyz' }],
    address: 'kly24cd35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu',
    logo: {
      png: 'https://lisk-qa.ams3.digitaloceanspaces.com/lisk.png',
      svg: 'https://lisk-qa.ams3.digitaloceanspaces.com/lisk.svg',
    },
    lastCertificateHeight: 1000,
    lastUpdated: 1666566000000,
    escrowedKLY: 50000000,
  },
  {
    chainName: 'Colecti',
    chainID: '00000002',
    status: 'active',
    apis: [
      { rest: 'https://service.colecti.com', rpc: 'wss://service.colecti.com' },
      { rest: 'https://testnet.colecti.com', rpc: 'wss://testnet.colecti.com' },
    ],
    address: 'kly24cd35u4jdq8ssd03pnsqe5dsxwrnazyqqqg5eu',
    logo: {
      png: 'https://lisk-qa.ams3.digitaloceanspaces.com/klayr.png',
      svg: 'https://lisk-qa.ams3.digitaloceanspaces.com/klayr.svg',
    },
    lastCertificateHeight: 900,
    lastUpdated: 1666566000000,
    escrowedKLY: 500000000,
  },
];

export default blockchainApplicationsExplore;
