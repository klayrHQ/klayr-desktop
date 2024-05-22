import SignClient from '@walletconnect/sign-client';
import { to } from 'await-to-js';
import pkg from '../../../package.json';

export async function createSignClient() {
  const [, result] = await to(
    SignClient.init({
      projectId: process.env.PROJECT_ID ?? '8f2a5ab63f54b27471714e81d1a49da3',
      metadata: {
        name: pkg.name,
        description: pkg.description,
        url: pkg.homepage,
        icons: ['https://klayr.xyz/documentation/_/img/klayr-symbol.svg'],
      },
    })
  );

  return result;
}
