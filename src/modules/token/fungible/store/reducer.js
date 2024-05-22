import { tokenMap } from '@token/fungible/consts/tokens';

export const initialState = {
  active: tokenMap.KLY.key,
  list: {
    [tokenMap.KLY.key]: true,
  },
};

const token = (state = initialState) => state;

export default token;
