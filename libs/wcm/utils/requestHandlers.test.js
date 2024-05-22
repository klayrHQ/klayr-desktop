// import { approveKlayrRequest, rejectKlayrRequest } from './requestHandlers';

describe('requestHandlers', () => {
  describe('Sign transaction', () => {
    describe('approveKlayrRequest', () => {
      it.todo('Sign tx using private key of the sender account (given params are ok)');
      it.todo('Throw error if tx object is invalid');
      it.todo('Throw error if tx object does not match the schema');
      it.todo('Throw error if wallet is not the same as the sender');
    });
  });

  describe('Sign message', () => {
    describe('approveKlayrRequest', () => {
      it.todo('Digest the message and sign using private key');
      it.todo('Throw error if message was undefined');
      it.todo('Throw error if wallet did not match the request account');
    });
  });

  describe('rejectKlayrRequest', () => {
    it.todo('Calls formatJsonRpcError with correct id and error message');
  });
});
