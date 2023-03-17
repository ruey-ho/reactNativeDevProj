import {Content} from 'native-base';
import React from 'react';
import {connect} from 'react-redux';

import ReduxActionLogin, {
  ReduxEnumLogin,
} from '../../redux/action/reduxAction.login';
import ComponentSideMenuLogin from './c.sideMenu.login';
import ComponentSideMenuPreLogin from './c.sideMenu.preLogin';
import {reset} from './main.navigate';
import {CommonComponent} from '../abstract/common';

export default connect(state => {
  let thisState = [...state['ReduxLogin']];
  let stateObj = {};

  if (thisState) {
    for (let i = 0; i < thisState.length; i++) {
      let recordItem = thisState[i];
      if (!recordItem['completed']) {
        if (ReduxEnumLogin.LOGIN == recordItem['type']) {
          stateObj['onReadyFunction'] = 'updateLogin';
          recordItem['completed'] = true;
        } else if (ReduxEnumLogin.LOGOUT == recordItem['type']) {
          stateObj['onReadyFunction'] = 'updateLogout';
          recordItem['completed'] = true;
        } else if (ReduxEnumLogin.REFRESH_USER_INFO == recordItem['type']) {
          stateObj['onReadyFunction'] = 'refreshUserInfo';
          recordItem['completed'] = true;
        }
      }
    }
  }

  return stateObj;
})(
  class ComponentHelperSiderMenu extends CommonComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLogin: false,
      };
    }

    updateLogin() {
      this.setState({isLogin: true}, () => {
        this.dispatch(ReduxActionGlobalMenu.rRequestEnd());
      });
    }
    updateLogout() {
      this.setState({isLogin: false}, () => {
        this.dispatch(ReduxActionGlobalMenu.rRequestEnd());
      });
    }

    render() {
      if (this.state.isLogin) {
        return (
          <>
            <Content
              style={{
                backgroundColor: '#FFFFFF',
              }}>
              <ComponentSideMenuLogin navigate={reset} data={this.state.data} />
            </Content>
          </>
        );
      } else {
        return (
          <>
            <ComponentSideMenuPreLogin
              navigate={reset}
              data={this.state.data}
            />
          </>
        );
      }
    }
  },
);
