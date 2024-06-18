/* eslint-disable no-restricted-globals */
import { encryptPrivateKeyAccount } from '../../../account/utils';

self.onmessage = (message) => {
  const {
    privateKey,
    password,
    accountName,
  } = message.data;
  encryptPrivateKeyAccount({
    password,
    name: accountName,
    privateKey: privateKey?.value,
  })
    .then(self.postMessage)
    .catch((e) => {
      console.log("EEE", e)
      self.postMessage({ error: true })
    });
};
