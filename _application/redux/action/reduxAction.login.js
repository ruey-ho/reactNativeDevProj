export const ReduxEnumLogin = {
  INIT: '_LOGIN_INIT_',
  INIT_DONE: '_LOGIN_INIT_DONE_',
  ERROR: '_LOGIN_ERROR_',
  REQUEST_END: '_LOGIN_REQUEST_END_',
};

export default new (class ReduxActionLogin {
  rInit(header = {}, param = {}) {
    console.time('LoginInit API')
    return {
      type: ReduxEnumLogin.INIT,
      head: header,
      param: param,
    }
  }
  rInitDone(result) {
    console.timeEnd('LoginInit API')
    return {
      type: ReduxEnumLogin.INIT_DONE,
      _result_: result,
    }
  }
  rError(error) {
    return {
      type: ReduxEnumLogin.ERROR,
      _result_: error,
    };
  }
  rRequestEnd() {
    return {
      type: ReduxEnumLogin.REQUEST_END,
    };
  }
})();
