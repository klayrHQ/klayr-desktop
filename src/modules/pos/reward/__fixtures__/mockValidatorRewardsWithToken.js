import { mockAppsTokens } from '@token/fungible/__fixtures__';

export const mockValidatorRewards = {
  data: {
    klyo5yghbggbxxfbowg53qwknef9wax9yymqns3my: {
      stakerAddress: 'klyguo9kqnea2zsfo3a6qppozsxsg92nuuma3p7ad',
      validatorAddress: 'klyo5yghbggbxxfbowg53qwknef9wax9yymqns3my',
      tokenID: '0000000100000000',
      amount: '975328109',
    },
    klyruwgk9vrrduhw65o3zz9ddqbadtbv7o85pzapb: {
      stakerAddress: 'klyguo9kqnea2zsfo3a6qppozsxsg92nuuma3p7ad',
      validatorAddress: 'klyruwgk9vrrduhw65o3zz9ddqbadtbv7o85pzapb',
      tokenID: '0000000200000000',
      amount: '763135532',
    },
  },
};

export const mockValidatorRewardsWithToken = Object.values(mockValidatorRewards.data).map(
  (validatorWithRewards) => {
    const token = mockAppsTokens.data.find(
      (metaToken) => metaToken.tokenID === validatorWithRewards.tokenID
    );

    return {
      ...validatorWithRewards,
      ...token,
    };
  }
);
