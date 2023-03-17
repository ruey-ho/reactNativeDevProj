import {takeEvery} from 'redux-saga/effects';
import {ReduxEnumLogin} from '../action/reduxAction.login';
import ReduxSagaLogin from './reduxSaga.login';

const root = function* reduxSaga() {
  /* #### login #### */
  yield takeEvery(ReduxEnumLogin.INIT, ReduxSagaLogin.init);
};

export default root;
