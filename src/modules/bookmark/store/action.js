import { tokenMap } from '@token/fungible/consts/tokens';
import { getFromStorage } from 'src/utils/localJSONStorage';
import { emptyBookmarks } from '@bookmark/utils';
import { validateAddress } from 'src/utils/validators';
import actionTypes from './actionTypes';

/**
 * An action to dispatch settingsRetrieved
 */
export const bookmarksRetrieved = () => (dispatch) => {
  getFromStorage('bookmarks', emptyBookmarks, (data) => {
    const bookmarks = {
      KLY: data.KLY.map((wallet) => ({
        ...wallet,
        disabled: validateAddress(wallet.address) === 1,
      })),
    };
    dispatch({
      type: actionTypes.bookmarksRetrieved,
      data: bookmarks,
    });
  });
};

export const bookmarkAdded = ({ wallet, token = tokenMap.KLY.key }) => ({
  data: { wallet, token },
  type: actionTypes.bookmarkAdded,
});

export const bookmarkUpdated = ({ wallet, token = tokenMap.KLY.key }) => ({
  data: { wallet, token },
  type: actionTypes.bookmarkUpdated,
});

export const bookmarkRemoved = ({ address, token = tokenMap.KLY.key }) => ({
  data: { address, token },
  type: actionTypes.bookmarkRemoved,
});
