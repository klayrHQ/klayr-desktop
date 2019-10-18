import actionTypes from '../../constants/actions';
import voting from '../../constants/voting';

const blocks = (state = { latestBlocks: [] }, action) => {
  switch (action.type) {
    case actionTypes.newBlockCreated:
      return {
        ...state,
        latestBlocks: [
          action.data.block,
          ...state.latestBlocks.slice(0, voting.numberOfActiveDelegates),
        ],
      };
    default:
      return state;
  }
};

export default blocks;
