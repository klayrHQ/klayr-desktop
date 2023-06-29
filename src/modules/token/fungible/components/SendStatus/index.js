/* istanbul ignore file */
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTranslation } from 'react-i18next';
import { selectActiveTokenAccount, selectActiveToken } from 'src/redux/selectors';
import Status from './Status';

const mapStateToProps = (state) => ({
  account: selectActiveTokenAccount(state),
  bookmarks: state.bookmarks,
  transactions: state.transactions,
  token: selectActiveToken(state),
});

export default compose(connect(mapStateToProps), withTranslation())(Status);
