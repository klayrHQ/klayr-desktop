import { DEFAULT_NETWORK } from 'src/const/config';

export const networkKeys = {
  mainnet: 'mainnet',
  alphanet: 'alphanet',
  betanet: 'betanet',
  devnet: 'devnet',
  testnet: 'testnet',
  customNode: 'customNode',
};

const networks = {
  [networkKeys.mainnet]: {
    name: networkKeys.mainnet,
    label: 'Mainnet',
    serviceUrl: 'https://service.klayr.xyz',
    wsServiceUrl: 'wss://service.klayr.xyz',
    isAvailable: true,
  },
  [networkKeys.testnet]: {
    name: networkKeys.testnet,
    label: 'Testnet',
    serviceUrl: 'https://testnet-service.klayr.xyz',
    wsServiceUrl: 'wss://testnet-service.klayr.xyz',
    isAvailable: true,
  },
  [networkKeys.betanet]: {
    name: networkKeys.betanet,
    label: 'Betanet',
    serviceUrl: 'https://betanet-service.klayr.xyz',
    wsServiceUrl: 'wss://betanet-service.klayr.xyz',
    isAvailable: false,
  },
  [networkKeys.alphanet]: {
    name: networkKeys.alphanet,
    label: 'Alphanet',
    serviceUrl: 'http://alphanet-service.klayr.xyz',
    wsServiceUrl: 'ws://alphanet-service.klayr.xyz',
    isAvailable: false,
  },
  [networkKeys.devnet]: {
    name: networkKeys.devnet,
    label: 'Devnet',
    serviceUrl: 'http://devnet-service.klayr.xyz:9901',
    wsServiceUrl: 'ws://devnet-service.klayr.xyz:9901',
    isAvailable: false,
  },
  [networkKeys.customNode]: {
    name: networkKeys.customNode,
    label: 'CustomNode',
    serviceUrl: 'http://localhost:9901',
    wsServiceUrl: 'ws://localhost:9901',
    isAvailable: DEFAULT_NETWORK === networkKeys.customNode,
  },
};

export default networks;
