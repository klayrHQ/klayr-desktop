import { cryptography } from '@klayr/client';

export const signMessageWithPrivateKey = ({ message, privateKey }) => {
  const result = cryptography.ed.signAndPrintMessage(message, Buffer.from(privateKey, 'hex'));

  return result;
};
