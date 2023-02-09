import {convertCommissionToPercentage, convertCommissionToNumber} from './getValidatorCommission';

describe('convertCommissionToPercentage', () => {
  it('Should convert empty arguments it to percentage', () => {
    expect(convertCommissionToPercentage()).toEqual('0.00');
    expect(convertCommissionToPercentage()).not.toEqual('0');
  });


  it('Should convert any number to percentage', () => {
    expect(convertCommissionToPercentage(10000)).toEqual('100.00');
    expect(convertCommissionToPercentage(10000)).not.toEqual('100');
  });
});

describe('convertCommissionToPercentage', () => {
  it('Should convert empty arguments it to percentage', () => {
    expect(convertCommissionToNumber()).toEqual(0);
    expect(convertCommissionToNumber()).not.toEqual('0');
  });

  it('Should convert any number to percentage', () => {
    expect(convertCommissionToNumber('100.00')).toEqual(10000);
    expect(convertCommissionToNumber('100.00')).not.toEqual('10000');
  });
});
