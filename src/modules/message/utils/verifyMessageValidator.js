import { cryptography } from '@klayr/client';

const verifyMessageValidator = (inputs) => {
  let isCorrect = false;

  try {
    isCorrect = cryptography.ed.verifyMessageWithPublicKey({
      message: inputs.message,
      publicKey: Buffer.from(inputs.publicKey, 'hex'),
      signature: Buffer.from(inputs.signature, 'hex'),
    });
  } catch (e) {
    isCorrect = false;
  }
  return isCorrect;
};

export default verifyMessageValidator;
