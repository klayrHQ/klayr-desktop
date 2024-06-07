import SignClient from '@walletconnect/sign-client';
import { to } from 'await-to-js';
import pkg from '../../../package.json';

export async function createSignClient() {
  const [, result] = await to(
    SignClient.init({
      projectId: process.env.PROJECT_ID ?? '43f4eccd4d8f7ea3cb05599d397103cd',
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
