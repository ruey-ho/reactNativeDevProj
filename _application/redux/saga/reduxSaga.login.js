import {call, put} from 'redux-saga/effects';
import ReduxActionLogin from '../action/reduxAction.login';

export default new (class ReduxSagaLogin {
  *init(action) {
    let resultBroadcast = {};
    let resultDowntime = {};

    try {
      console.log(' - ReduxSagaLogin : init : [START] : *** ');

      let result = {
        data: {
          good: 100,
        },
      };

      console.log(
        ' - ReduxSagaLogin : init : [RESPONSE] : result ==> ',
        result,
      );

      yield put(ReduxActionLogin.rInitDone(result));
    } catch (e) {
      console.log(' - ReduxSagaLogin : init : [EXCEPTION] : error ==> ', e);

      yield put(ReduxActionLogin.rError(e));
    } finally {
      console.log(' - ReduxSagaLogin : init : [END] : *** ');
    }
  }
})();
