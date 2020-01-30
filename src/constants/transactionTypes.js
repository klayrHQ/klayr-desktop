const transactionTypes = (t = str => str) => ({
  send: {
    code: 0,
    apiSpecificCode: 8,
    title: t('Send'),
    senderLabel: t('Sender'),
    key: 'transfer',
  },
  setSecondPassphrase: {
    code: 1,
    apiSpecificCode: 9,
    title: t('Second passphrase registration'),
    senderLabel: t('Account'),
    key: 'secondPassphrase',
    icon: 'tx2ndPassphrase',
  },
  registerDelegate: {
    code: 2,
    apiSpecificCode: 10,
    title: t('Delegate registration'),
    senderLabel: t('Account nickname'),
    key: 'registerDelegate',
    icon: 'txDelegate',
  },
  vote: {
    code: 3,
    apiSpecificCode: 11,
    title: t('Delegate vote'),
    senderLabel: t('Voter'),
    key: 'vote',
    icon: 'txVote',
  },
  createMultiSig: {
    code: 4,
    apiSpecificCode: 12,
    title: t('Multisignature creation'),
    senderLabel: t('Registrant'),
    key: 'createMultiSig',
  },
});

/**
 * To get the transaction config for a given transaction code.
 *
 * @param {Number} transaction type code
 * @returns {Object} Returns the transaction config if the key is valid, else it return null
 */
transactionTypes.getByCode = (code) => {
  const types = transactionTypes();
  const key = Object.keys(types).filter(type => types[type].code === code);
  return key.length ? types[key] : null;
};

/**
 * To get the list of values for a given key
 * For example it returns [0, 1, 2, 3, 4] if called with 'code' against Core 3.x
 *
 * @param {String} transaction type code
 * @returns {Array} Returns the list of values for a given key
 */
transactionTypes.getListOf = (key) => {
  const types = transactionTypes();
  return Object.keys(types).map(type => types[type][key]);
};

export default transactionTypes;
