import { encryptAccount } from '../../../account/utils';
import './encryptAccount.worker';

window.self.postMessage = jest.fn();

jest.mock('../../../account/utils');

describe('encrypt account worker', () => {
  const data = {
    privateKey: 'test-private-key',
    password: 'test-password',
    accountName: 'test-account-name',
  };

  it('should invoke encryptAccount method', async () => {
    encryptAccount.mockResolvedValue({});
    window.self.onmessage({ data });
    expect(encryptAccount).toHaveBeenCalled();

    jest.resetAllMocks();
    encryptAccount.mockRejectedValue({});
    window.self.onmessage({ data });
    expect(encryptAccount).toHaveBeenCalled();
  });
});
