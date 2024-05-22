/* eslint-disable import/prefer-default-export */

const generateStakes = (index) => ({
  address: `klytzb4j7e3knk4mkxckdr3y69gtu2nwmsb3hjbkg`,
  amount: `1000${index}`,
  name: `klayrhq-${index}`,
});

const data = {
  stakers: Array(30)
    .fill(1)
    .map((_, idx) => generateStakes(idx)),
  account: {
    address: 'kly24cd35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu',
    publicKey: 'aq02qkbb35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu',
    name: 'genesis_56',
  },
};

export const mockReceivedStakes = {
  data,
  meta: {
    count: 2,
    offset: 0,
    total: 30,
  },
};
