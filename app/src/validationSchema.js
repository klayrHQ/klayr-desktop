export const requestTokenSchema = {
  $id: '/klayr/request-token',
  title: 'Request token params',
  type: 'object',
  required: ['modal', 'recipient', 'amount', 'token', 'recipientChain'],
  properties: {
    token: {
      dataType: 'string',
      minLength: 16,
      maxLength: 16,
    },
    modal: {
      dataType: 'string',
      pattern: 'send',
    },
    amount: {
      dataType: 'string',
      format: 'double',
    },
    recipient: {
      dataType: 'string',
      minLength: 41,
      maxLength: 41,
    },
    recipientChain: {
      dataType: 'string',
      minLength: 8,
      maxLength: 8,
    },
    reference: {
      dataType: 'string',
      minLength: 0,
      maxLength: 64,
    },
  },
};

export const requestConnectSchema = {
  $id: '/klayr/request-connect',
  title: 'Request connect params',
  type: 'object',
  required: ['modal', 'url', 'tab'],
  properties: {
    url: {
      dataType: 'string',
      minLength: 1,
      maxLength: 255,
    },
    modal: {
      dataType: 'string',
      pattern: 'connectionProposal',
    },
    tab: {
      dataType: 'string',
      pattern: 'SessionManager',
    },
  },
};
