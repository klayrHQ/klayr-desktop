import actionTypes from '../../constants/actions';
import middleware from './voting';

describe('voting middleware', () => {
  it('should passes the action to next middleware', () => {
    const givenAction = {
      type: 'TEST_ACTION',
    };
    const next = jest.fn();
    const store = {
      getState: jest.fn(),
      dispatch: jest.fn(),
    };

    middleware(store)(next)(givenAction);
    expect(next).toHaveBeenCalledWith(givenAction);
    expect(store.dispatch).not.toHaveBeenCalled();
  });

  describe('on accountLoggedOut action', () => {
    const givenAction = {
      type: actionTypes.accountLoggedOut,
    };
    const expectedAction = {
      type: actionTypes.votesRetrieved,
      data: [],
    };
    const next = jest.fn();
    const store = {
      getState: jest.fn(),
      dispatch: jest.fn(),
    };
    it('should dispatch votesRetrieved with empty array', () => {
      middleware(store)(next)(givenAction);
      expect(next).toHaveBeenCalledWith(givenAction);
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

  });
});
