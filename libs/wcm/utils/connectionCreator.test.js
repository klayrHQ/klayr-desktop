import SignClient from '@walletconnect/sign-client';
import { createSignClient } from './connectionCreator';

jest.mock('@walletconnect/sign-client', () => ({
  init: jest.fn().mockResolvedValue(Promise.resolve({ mock: true })),
}));

describe('connectionCreator', () => {
  it('createSignClient function should call SignClient.init with right params', async () => {
    process.env = {
      PROJECT_ID: '8f2a5ab63f54b27471714e81d1a49da3',
    };
    const res = await createSignClient();
    expect(SignClient.init).toHaveBeenCalledWith({
      projectId: process.env.PROJECT_ID,
      relayUrl: process.env.RELAY_URL,
      metadata: {
        name: 'Klayr',
        description: 'Klayr',
        url: 'https://github.com/klayrHQ/klayr-desktop',
        icons: ['https://klayr.xyz/documentation/_/img/klayr-symbol.svg'],
      },
    });
    expect(res).toEqual({ mock: true });
  });
});
