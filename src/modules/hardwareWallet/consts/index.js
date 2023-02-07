/* istanbul ignore file */
export const CLIENT = {
  REQUEST: 'request',
  RESPONSE: 'result',
};
export const IPC_MESSAGES = {
  CHECK_LEDGER: 'checkLedger',
  CONNECT: 'connect',
  DEVICE_LIST_CHANGED: 'hwDeviceListChanged',
  DISCONNECT: 'disconnect',
  ERROR: 'error',
  EXIT: 'exit',
  GET_ADDRESS: 'GET_ADDRESS',
  GET_CONNECTED_DEVICES_LIST: 'getConnectedDevicesList',
  GET_PUBLIC_KEY: 'GET_PUBLIC_KEY',
  HW_COMMAND: 'hwCommand',
  HW_CONNECTED: 'hwConnected',
  HW_DISCONNECTED: 'hwDisconnected',
  MISSING_PIN: 'pin_not_provided_from_ui',
  SIGN_TRANSACTION: 'SIGN_TX',
  SIGN_MSG: 'SIGN_MSG',
  VALIDATE_PIN: 'validateTrezorPin',
  SELECT_DEVICE: 'selectDevice',
  GET_DEVICE: 'getDeviceById',
  GET_DEVICES: 'getDevices',
  GET_ACTIVE_DEVICE: 'getActiveDevices',
};
export const FUNCTION_TYPES = {
  [IPC_MESSAGES.GET_PUBLIC_KEY]: 'getPublicKey',
  [IPC_MESSAGES.GET_ADDRESS]: 'getAddress',
  [IPC_MESSAGES.SIGN_TRANSACTION]: 'signTransaction',
  [IPC_MESSAGES.SIGN_MSG]: 'signMessage',
};

export const METHOD_TYPES = {
  [IPC_MESSAGES.CHECK_LEDGER]: 'checkLedger',
  [IPC_MESSAGES.SELECT_DEVICE]: 'selectDevice',
  [IPC_MESSAGES.GET_DEVICE]: 'getDeviceById',
  [IPC_MESSAGES.GET_DEVICES]: 'getDevices',
  [IPC_MESSAGES.GET_ACTIVE_DEVICE]: 'getActiveDevices',
};

export const DEVICE_STATUS = {
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
};
