import { screen } from '@testing-library/react';
import { smartRender } from 'src/utils/testHelpers';
import WalletRow from './index';

const config = {
  renderType: 'render',
};

const props = {
  data: {
    address: 'kly3szyzzh78tvw5yufsqcvsck5me2rp3fcsdv7s7',
    balance: 100000000000000,
    knowledge: {
      owner: 'Max Kordex',
      description: 'from Klayr',
    },
  },
  token: {
    displayDenom: 'kly',
    denomUnits: [{ denom: 'kly', decimals: 8, aliases: ['Klayr'] }],
    symbol: 'KLY',
  },
  tokenSupply: {
    amount: '11036090880452566',
    tokenID: '0200000000000000',
  },
};

describe('WalletRow', () => {
  it('renders properly', () => {
    smartRender(WalletRow, props, config);
    expect(screen.getByText('kly3szyzzh78tvw5yufsqcvsck5me2rp3fcsdv7s7')).toBeInTheDocument();
    expect(screen.getByText('1,000,000 KLY')).toBeInTheDocument();
    expect(screen.getByText('0.91%')).toBeInTheDocument();
    expect(screen.getByText('Max Kordex from Klayr')).toBeInTheDocument();
  });

  it('displays fallback supply value', () => {
    const updatedProps = { ...props, tokenSupply: undefined };
    smartRender(WalletRow, updatedProps, config);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('displays fallback owner value', () => {
    const updatedProps = { ...props, data: { ...props.data, knowledge: {} } };
    smartRender(WalletRow, updatedProps, config);
    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
