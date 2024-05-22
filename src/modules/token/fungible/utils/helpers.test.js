import { expect } from 'chai';
import { convertFromBaseDenom, convertToBaseDenom } from './helpers';

const mockKlayrTokenMetadata = {
  displayDenom: 'kly',
  denomUnits: [
    {
      denom: 'beddows',
      decimals: 0,
      aliases: ['Beddows'],
    },
    {
      denom: 'kly',
      decimals: 8,
      aliases: ['Klayr'],
    },
  ],
};

const mockEventiTokenMetadata = {
  displayDenom: 'envt',
  denomUnits: [
    {
      denom: 'ventti',
      decimals: 0,
      aliases: ['Ventti'],
    },
    {
      denom: 'envt',
      decimals: 5,
      aliases: ['Enevti'],
    },
  ],
};

describe('Token utils', () => {
  describe('convertFromBaseDenom', () => {
    it('should convert beddows to kly', () => {
      expect(convertFromBaseDenom(100000000, mockKlayrTokenMetadata)).to.be.equal('1');
    });

    it('should convert ventti to envt', () => {
      expect(convertFromBaseDenom(10, mockEventiTokenMetadata)).to.be.equal('0.0001');
    });

    it('should handle conversion when passing empty token metadata', () => {
      expect(convertFromBaseDenom(5000000)).to.be.equal('0.05');
    });
  });

  describe('convertToBaseDenom', () => {
    it('should convert kly to beddows', () => {
      expect(convertToBaseDenom(1, mockKlayrTokenMetadata)).to.be.equal('100000000');
    });

    it('should convert envt to ventti', () => {
      expect(convertToBaseDenom(0.0001, mockEventiTokenMetadata)).to.be.equal('10');
    });

    it('should handle conversion when passing empty token metadata', () => {
      expect(convertToBaseDenom(0.05)).to.be.equal('5000000');
    });
  });
});
