import i18next from 'i18next';
import routes from 'src/routes/routes';

export const INFO_BANNERS = {
  klayrWalletKeys: {
    infoMessage: (t) => t('About Your Klayr Wallet'),
    infoLabel: (t) => t('Important'),
    infoDescription: (t) =>
      t(
        'The Klayr Wallet provides a secure, non-custodial way to manage and transfer KLY tokens. Your keys, your responsibility.'
      ),
    illustrationName: 'accountManagement',
    infoLink: 'https://klayr.xyz/wallet',
    infoLinkText: 'Learn more about the risks here',
  },
  klayrIgnite: {
    infoMessage: (t) => t('Klayr Ignite Grants are now live!'),
    infoDescription: (t) =>
      t(
        'JavaScript developers can now earn 10,000 $KLY for building a sidechain on our testnet! Will you be one of the first developers in the Klayr ecosystem?'
      ),
    illustrationName: 'klayrIgnite',
    infoLink: 'https://klayr.xyz/ignite-grants?utm_source=klayr_wallet&utm_medium=banner&utm_campaign=ignite&utm_content=v1',
    infoLinkText: 'Apply Now',
  },
  klayrRewards: {
    infoMessage: (t) => t('Ready for rewards?'),
    infoDescription: (t) =>
      t(
        'Validator rewards are now live, and it’s time for you to put your tokens to work. With a 7 second block time and high rewards (2 $KLY per block), it’s never been easier to earn staking rewards fast. Start staking now and don’t miss out out on high yields.'
      ),
    illustrationName: 'getRewarded',
  },
  klayrLaunch: {
    infoMessage: (t) => t('Klayr Mainnet Launch Announcement'),
    infoDescription: (t) =>
      t(
        'We are excited to announce the launch of the Klayr Mainnet blockchain on June 25th. Join us in this new era of decentralization, scalability, and energy efficiency. Participate in securing the network and earn rewards based on your stakes.'
      ),
    illustrationName: 'expandYourKnowledge',
  },
  klayrMigration: {
    infoMessage: (t) => t('Klayr v4 Migration'),
    infoLabel: (t) => t('Announcement'),
    infoDescription: (t) =>
      t(
        'This announcement is intended for all validators and node operators. Please ensure that you correctly migrate your nodes to the new network to avoid missing any blocks after the network hard fork.'
      ),
    illustrationName: 'klayrMigrationIllustration',
    infoLink: 'https://klayr.xyz/documentation/klayr-core/management/migration.html',
    infoLinkText: 'Migration guide',
  },
  proofOfStake: {
    infoMessage: (t) => t('Introducing proof of stake'),
    infoDescription: (t) =>
      t(
        'Enhancing the blockchain consensus mechanism with PoS, and providing increased decentralization, scalability, and energy efficiency, empowering users to participate in securing the network, and earning rewards based on their token holdings.'
      ),
    illustrationName: 'proofOfStake',
  },
  accountManagement: {
    infoMessage: (t) => t('Introducing account management'),
    infoDescription: (t) =>
      t(
        'Effortlessly manage multiple accounts in one interface with enhanced privacy and security. Seamlessly switch between accounts, allocate funds, and monitor balances.'
      ),
    illustrationName: 'accountManagement',
    infoLink: routes.wallet.path,
    infoLinkText: 'Explore',
  },
  blockchainExploring: {
    infoMessage: (t) => t('Introducing blockchain application exploring and management'),
    infoDescription: (t) =>
      t(
        'A new management feature allows you to seamlessly add and switch between applications. The dedicated application tab provides a comprehensive overview of registered, active, and terminated blockchain applications, and statistics.'
      ),
    illustrationName: 'applicationManagement',
    infoLink: routes.blockchainApplications.path,
    infoLinkText: 'Explore',
  },
  hardwareWalletManagement: {
    infoMessage: (t) => t('Introducing hardware wallet management'),
    infoDescription: (t) =>
      t(
        'Explore multiple hardware wallet devices simultaneously. Seamlessly access your accounts through the integrated functionality of our new account management feature.'
      ),
    illustrationName: 'hardwareWalletManagement',
    infoLink: routes.wallet.path,
    infoLinkText: 'Explore',
  },
  walletConnectManagement: {
    infoMessage: (t) => t('Introducing wallet connect management and exploring'),
    infoDescription: (t) =>
      t(
        'Enjoy a streamlined and secure experience of signing transactions for external applications. Unlock a world of possibilities with Wallet Connect Integration, and take full control of your digital assets.'
      ),
    illustrationName: 'walletConnect',
    infoLink: `${routes.blockchainApplications.path}?tab=SessionManager`,
    infoLinkText: 'Explore',
  },
  events: {
    infoMessage: (t) => t('Introducing events'),
    infoDescription: (t) =>
      t(
        'Stay informed in real-time about crucial blockchain activities. With this new feature, track the end to end execution and its results for all transactions and blocks.'
      ),
    illustrationName: 'transactionEvents',
    infoLink: routes.wallet.path,
    infoLinkText: 'Explore',
  },
  multiTokens: {
    infoMessage: (t) => t('Introducing Multi-tokens'),
    infoDescription: (t) =>
      t(
        'With Klayr interoperability, you can now store, manage, and transact with a variety of tokens within a single wallet interface. Seamlessly switch between different digital assets and diversify your portfolio effortlessly. Enjoy the convenience and flexibility of Multi-Tokens.'
      ),
    illustrationName: 'multiTokenBalances',
    infoLink: routes.allTokens.path,
    infoLinkText: 'Explore',
  },
  sendAndRequestTokenOnChain: {
    infoMessage: (t) => t('Introducing sending and requesting token within an application'),
    infoDescription: (t) =>
      t(
        'Flawlessly move your assets within a specific blockchain application. Experience the power of cross-chain transfers, enabling you to expand your reach and optimize your asset management strategies.'
      ),
    illustrationName: 'crossApplicationsSendRequestTokens',
  },
  sendAndRequestTokenCrossChain: {
    infoMessage: (t) => t('Introducing sending and requesting token across applications'),
    infoDescription: (t) =>
      t(
        'Flawlessly move your assets across different blockchain applications. Experience the power of cross-chain transfers, enabling you to expand your reach and optimize your asset management strategies.'
      ),
    illustrationName: 'withinAndCrossApplicationsSendRequestTokens',
  },
  networkAndApplicationManagement: {
    infoMessage: (t) => t('Introducing Network and Application management'),
    infoDescription: (t) =>
      t(
        'Take control of your blockchain network settings. Now you can customize your network preferences according to your specific needs.'
      ),
    illustrationName: 'networkManagement',
    infoLink: `${routes.wallet.path}?modal=manageApplications`,
    infoLinkText: 'Explore',
  },
};

export const INSUFFICENT_TOKEN_BALANCE_MESSAGE = {
  registerMultiSignature: i18next.t(
    'Token balance is not enough to register a multisignature account.'
  ),
  registerValidator: i18next.t('Token balance is not enough to register a validator profile.'),
  sendToken: i18next.t('There are no tokens to send at this moment.'),
  stakeValidator: i18next.t('Token balance is not enough to stake a validator.'),
};

export const shouldShowBookmark = (bookmarks, account, transactionJSON, token) => {
  if (account.summary.address === transactionJSON.params.recipientAddress) {
    return false;
  }

  return !bookmarks[token].find(
    (bookmark) => bookmark.address === transactionJSON.params.recipientAddress
  );
};
