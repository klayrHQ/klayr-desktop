/* eslint-disable max-lines */
const validatorsPage = {
  totalStakingNumber: '.total-staking-number',
  startStakingButton: '.start-staking-button',
  addedStakesCount: '.added-stakes-count',
  removedStakesCount: '.removed-stakes-count',
  goToConfirmationButton: '.go-to-confirmation-button',
  stakingHeader: '.staking-header',
};

const managedApplications = {
  managedApplicationRow: '.managed-application-row',
  managedAppDropdown: '.application-management-dropdown',
  addApplicationLink: '.add-application-link',
  addApplicationButton: '.add-application-button',
  addApplicationHeader: '.add-application-header',
  addApplicationTable: '.blockchain-application-add-list',
  addApplicationRow: '.blockchain-application-add-row',
  addApplicationSuccessHeader: '.add-application-success-header',
  addApplicationSuccessButton: '.add-application-success-button',
  removeApplicationButton: '.remove-application-button',
  selectApplicationNodeHeader: '.application-header',
  selectApplicationNodeContent: '.application-content',
  selectApplicationNodeRow: '.select-node-row',
};

const tokenUsage = {
  requestTokenButton: '.request-token-button',
  copyRequestTokenButton: '.request-wrapper .copy-button',
  recipientChainSelect: '.request-wrapper .recipient-chain-select',
  tokenSelect: '.request-wrapper .token-select',
  requestTokenAmountField: '.request-wrapper .amount-field',
  recipientChainDropdownOption: '.recipient-application .dropdown-option',
  tokenDropdownOption: '.token .dropdown-option',
  addMessageButton: '.add-message-button',
  removeMessageIcon: 'img[alt="removeBlueIcon"]',
  messageTextArea: '.reference textarea',
};

const ss = {
  ...validatorsPage,
  ...managedApplications,
  ...tokenUsage,
  becomeValidatorLink: '.register-validator',
  app: '#app',
  monitorNetwork: '#network',
  monitorTransactions: '#transactions',
  monitorBlocks: '#blocks',
  monitorAccounts: '#accounts',
  monitorValidators: '#validators',
  monitorStaking: '#staking',
  transactionsTable: '.transaction-results',
  transactionRow: '.transactions-row',
  blockRow: '.blocks-row',
  filterAll: '.filter-all',
  filterOutgoing: '.filter-out',
  filterIncoming: '.filter-in',
  filterStaked: '.filter-staked',
  filterNotStaked: '.filter-not-staked',
  seeAllTxsBtn: '.view-all',
  txDetailsBackButton: '.transaction-details-back-button',
  recipientInput: 'input.recipient.bookmark',
  recipientConfirmLabel: '.recipient-confirm',
  transferSendTab: '.send-tab',
  transferRequestTab: '.request-tab',
  requestSpecificAmountBtn: '.specify-request',
  confirmRequestBtn: '.confirm-request',
  qrCode: '.qr-code',
  requestQrCode: '.qrcode-section',
  confirmRequestBlock: '.confirm-request-step',
  requestLink: '.request-link',
  backButton: '.back',
  walletTab: 'li[data-value="transactions"]',
  stakesTab: 'div[name="main-tabs"] li:nth-child(2)',
  stakedAddress: '.stakes .staker-address',
  stakeRow: '.stake-row',
  accountAddress: '.account-address',
  showMoreStakesBtn: '.stakes-tab .load-more',
  leftBlockAccountExplorer: '.explorer-account-left-block',
  amountInput: '.amount input',
  bookmarkInput: '#bookmark-input',
  bookmarkList: '.bookmarkList',
  sendButton: '.confirm-button',
  transactionAddress: '.transaction-address span',
  validatorNameInput: '.select-name-input',
  genKeyInput: '.generator-publicKey-input',
  blsKeyInput: '.bls-key-input',
  popInput: '.pop-input',
  submitValidateNameBtn: '.submit-validator-name',
  successText: '.success-description',
  goToDashboardAfterValidatorReg: '.registration-success',
  confirmValidatorRegBtn: '.confirm-validator-registration',
  spinner: '.spinner',
  transactionReference: '.transaction-reference',
  transactionAmount: '.transaction-amount',
  transactionAmountPlaceholder: '.transaction-amount',
  validatorFeedbackError: '.input-feedback',
  activeAccount: '.active-info',
  accountBalance: '.balance-value',
  nextBtn: '.next',
  txNextBtn: '.confirm-btn',
  txHeader: '.tx-header',
  txSenderAddress: '.sender-address',
  txRecipientAddress: '.receiver-address',
  txDatePlaceholder: '.tx-date',
  txDate: '.tx-date .date',
  txTime: '.tx-time .time',
  txAddedStakes: '.tx-added-stakes .staker-address',
  txRemovedStakes: '.tx-removed-stakes .staker-address',
  txAmount: '.tx-amount',
  txFee: '.tx-fee',
  txConfirmations: '.tx-confirmation',
  txId: '.tx-id .copy-title',
  txReference: '.tx-reference',
  validatorResults: '.validators-result',
  transactionResults: '.transactions-result',
  recentSearches: '.addresses-result',
  idResults: '.addresses-result',
  closeSearchBtn: '.autosuggest-btn-close',
  searchNoResultMessage: '.no-result-message',
  transactionId: '.transaction-id .copy-title',
  userAccount: '.user-account',
  lskToken: '.token-selector-LSK',
  emptyResultsMessage: '.empty-message',
  revealCheckbox: '.reveal-checkbox',
  passphraseTextarea: 'textarea.passphrase',
  itsSafeBtn: '.yes-its-safe-button',
  passphraseWordHolder: '.passphrase-holder label',
  getToDashboardBtn: '.get-to-your-dashboard-button',
  confirmCheckbox: '.confirm-checkbox',
  settingsBtn: '#settings',
  currencySelect: '.currency input',
  currencyOptions: '.currency .option',
  switchNetworksTrigger: '.showNetwork',
  customNodeReadMode: '.custom-node-address',
  messageInput: 'textarea',
  resulteBtn: '.result',
  topBarMenuWalletBtn: '#wallet',
  referenceInput: '.reference input',
  referenceTextarea: '.reference textarea',
  referenceConfirmLabel: '.reference',
  convertorElement: '.convertor',
  convertedPrice: '.converted-price',
  resultMessage: '.result-box-message',
  okayButton: '.okay-button',
  initializeBanner: '.initialize-banner',
  accountInitializationMsg: '.account-initialization',
  accountInitializationBtn: '.account-init-button',
  sidebarMenuValidatorsBtn: '#validators',
  confirmBtn: '.confirm',
  validatorRow: '.validator-row',
  validatorList: '.validator-list',
  validatorRank: '.validator-rank',
  validatorName: '.validator-name',
  accountName: '.account-primary',
  accountLabel: '.account-label',
  validatorId: '.validator-id',
  validatorProductivity: '.validator-productivity',
  searchValidatorInput: 'input.search',
  stakeCheckbox: '.stake-checkbox',
  clearSearchBtn: '.clean-icon',
  addBookmarkAccountButton: '.add-account-button',
  bookmarkAccountItem: '.bookmark-account',
  titleInput: '.account-title input',
  bookmarkAccountBalance: '.bookmark-balance',
  sidebarMenuHelpBtn: '#help',
  createLiskIdBtn: '.new-account-button',
  passphraseInput: '.passphrase input',
  networkDropdown: '.network',
  networkOptions: '.network-dropdown .options > *',
  addressInput: '.address input',
  headerAddress: '.copy-title',
  nodeAddress: '.peer',
  networkName: '.network-name',
  networkAddress: '.network-address',
  errorPopup: '.toast',
  getPassphraseButton: '.get-passphrase-button',
  editBookmarkAccounts: '.edit-accounts',
  removeBookmarkAccount: '.remove-account',
  bookmarkAccount: '.bookmark-list-row',
  bookmarkAccountTitle: '.account-title input',
  tutorialTooltip: '.joyride-tooltip__header',
  priceChart: '.chartjs-size-monitor',
  transactionRequestButton: '.tx-receive-bt',
  transactionSendButton: '.tx-send-bt',
  bookmarks: '.bookmarks',
  addToBookmarks: '.add-to-bookmarks',
  confirmAddToBookmarks: '.bookmark-button',
  validatorStatsUptime: '.productivity',
  validatorStatsRank: '.rank',
  validatorStatsApproval: '.approval',
  validatorStatsWeight: '.stake',
  validatorStatsGenerated: '.generated',
  validatorStatsBlocks: '.blocks',
  validatorStatsLastBlock: '.last-generated',
  validatorStatsSince: '.validator-since',
  bookmarkAccountBtn: '.bookmark-account-button',
  bookmarkedAccountTitle: '.transactions .account-title',
  showMoreButton: '.transaction-results .load-more',
  showMoreBlocksBtn: '.block-results .load-more',
  showLatestBlocksBtn: '.load-latest',
  chooseAvatar: '.choose-avatar span',
  copyPassphrase: '.passphrase .word',
  passphraseWordConfirm: '.word-options .option',
  passphraseConfirmButton: 'button.confirm',
  exploreAsGuestBtn: '.explore-as-guest-button',
  walletOnboarding: '.wallet-onboarding',
  walletOnboardingClose: '.wallet-onboarding .banner-close',
  requestDropdown: '.request-dropdown',
  blockIdDetails: '.block-id',
  blockHeightDetails: '.block-height',
  blockDateDetails: '.block-date',
  blockGeneratorDetails: '.block-generator',
  termsOfUse: '.accept-terms',
  searchIcon: '.search-icon',
  searchInput: '.search-input',
  searchAccountRow: '.account-row',
  searchAccountRowTitle: '.account-title',
  searchTransactionRowId: '.transaction-id',
  searchValidatorsRow: '.validators-row',
  searchMessage: '.search-bar-feedback',
  searchValidatorsResults: '.validators-content',
  searchAccountResults: '.account-content',
  searchTransactionRow: '.search-transaction-row',
  transactionDetailsID: '.copy-title',
  submittedTransactionMessage: '.body-message',
  sendReferenceText: '.message',
  summaryAmount: '.amount-Summary',
  sendFormAmountFeedback: '.amount-feedback',
  sendBookmarkList: '.bookmark-list li',
  filterTransactionsBtn: '.filterTransactions',
  filterDropdown: '.filter-container',
  dateFromInputFilter: '.dateFromInput',
  dateToInputFilter: '.dateToInput',
  amountFromInputFilter: '.amountFromInput',
  amountToInputFilter: '.amountToInput',
  senderAddressFilter: 'input[name="senderAddress"]',
  messageInputFilter: 'input.message',
  transactionTypeFilter: '.transaction-options',
  heightFilter: 'input.height',
  generatedByFilter: '.generator',
  moreLessSwitch: '.more-less-switch',
  applyFilters: '.saveButton',
  filterBar: '.filterBar',
  filter: '.filter',
  clearFilterBtn: '.clear-filter',
  clearAllFiltersBtn: '.clear-all-filters',
  balanceChart: 'chartjs-render-monitor',
  navigationBtnBack: '.go-back',
  navigationBtnForward: '.go-forward',
  termsOfUseLink: '.terms-of-use',
  connectButton: '.connect-button',
  walletHeader: '.wallet-header',
  toast: '.toast',
  confirmButton: '.confirm-button',
  coinRow: '.coin-row',
  closeOnboardingButton: '.closeOnboarding',
  goBack: '.go-back',
  sendLink: '.open-send-dialog',
  closeDialog: '.dialog-close-button',
  bookmarkListToggle: '.bookmark-list-toggle',
  settingsMenu: '.settings-toggle',
  openStakeStakeDialog: '.open-add-stake-dialog',
  stakingQueueToggle: '.staking-queue-toggle',
  openUnlockBalanceDialog: '.open-unlock-balance-dialog',
  unlockAmountValue: '.unlock-amount-value',
  removeStake: '.remove-stake',
  unlockingBalance: '.unlocking-balance',
  availableBalance: '.available-balance',
  addBookmarkIcon: '.add-bookmark-icon',
  inputLabel: '.input-label',
  saveButton: '.save-button',
  feeValue: '.fee-value',
  nodeConnectionLoadingSpinner: '.node-connection-loading-spinner',
  backToWalletButton: '.back-to-wallet-button',
  walletsRow: '.wallets-row',
  showMoreAccountsBtn: '.accounts-box .load-more',
  signMultiSignTransactionToggle: '.signMultiSignTransaction-toggle',
  walletInfoMsign: '.account-info-msign',
  msignPkInput: '.msign-pk-input',
  addNewMembers: '.add-new-members',
  mandatoryToggle: '.mandatory-toggle',
  selectOptional: '.select-optional',
  multisignatureEditorInput: '.multisignature-editor-input',
  copyButton: '.copy-button',
  downloadButton: '.download-button',
  signBtn: '.sign',
  msignSendButton: '.send-button',
  txSignInput: '.tx-sign-input',
  txNumberOfSignatures: '.tx-required-signatures',
  memberTitle: '.member-title',
  txRemainingMembers: '.tx-remaining-members',
  useSecondPassphraseBtn: '.use-second-passphrase-btn',
  peerRow: '.peer-row',
  showMorePeersBtn: '.peers-box .load-more',
  sortByBtn: '.sort-by',
  signMessageInput: '.sign-message-input',
  copyToClipboardBtn: '.copy-to-clipboard',
  signedResult: '.result',
  timeValue: '.timeValue-clock',
  blocksGenerated: '.blocksGenerated',
  generatorItem: '.generator-item',
  insideRoundBtn: '.validators-table > ul > .tab:first-child',
  outsideRoundBtn: '.validators-table > ul > .tab:nth-child(2)',
  sanctionedBtn: '.validators-table > ul > .tab:nth-child(3)',
  latestStakesBtn: '.validators-table > ul > .tab:nth-child(4)',
  watchedBtn: '.validators-table > ul > .tab:last-child',
  filterValidatorInput: '.filter-by-name',
  showMoreValidatorsBtn: '.validator-box .load-more',
  summary: '.summary',
  transactionRowSender: '.transaction-row-sender',
  transactionRowRecipient: '.transaction-row-recipient',
  loadLatest: '.load-latest',
  verifyMessageTextArea: '.verify-message-input',
  continueBtn: '.continue',
  inputsViewBtn: '.inputs-view-icon',
  textAreaViewBtn: '.textarea-view-icon',
  verifyMessageInput: '.message',
  verifyPublicKeyInput: '.publicKey',
  verifySignatureInput: '.signature',
  acceptTermsButton: '.accept-terms',
  blockchainName: '.chain-name-text',
  chainOwnerAddress: '.copy-address-wrapper .copy-title',
  chainIdDisplay: '.chain-id',
  chainStatusDisplay: '.chain-status',
  lastChainUpdateDisplay: '.last-update',
  lastCertHeightDisplay: '.last-certificate-height',
  chainRow: '.blockchain-application-row',
  chainPinButton: '.blockchain-application-pin-button',
  chainDetailsPinButton: '.chain-details-pin-button',
  cancelRemoveBlockchainButton: '.cancel-remove-blockchain',
  removeBlockchainButton: '.remove-blockchain',
  goToDashboardButton: '.remove-app-success-wrapper > button',
};

export default ss;
