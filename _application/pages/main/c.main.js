import {Container} from 'native-base';
import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {AppConstant} from '../../constant/constant.app';
import ReduxActionLogin, {
  ReduxEnumLogin,
} from '../../redux/action/reduxAction.login';
import {StringUtil} from '../../utils/util.string';
import ComponentCommon from '../abstract/common';
import HelperNavigateUtil from '../helper/h.navigate';
import {HelperNavigateENUM} from '../helper/h.navigateEnum';
import {styleApp} from '../styles/s.app';
import ComponentHelperSiderMenu from './c.sideMenu';
import {setTopLevelNavigator} from './main.navigate';

const DrawerContainer = createAppContainer(
  createDrawerNavigator(
    {
      app: createStackNavigator(HelperNavigateUtil.getNavigate(), {
        initialRouteName: StringUtil.isEmpty(AppConstant.app_default_page)
          ? HelperNavigateENUM.PATH_LOGIN
          : AppConstant.app_default_page,
        headerMode: 'none',
      }),
    },
    {
      initialRouteName: 'app',
      drawerWidth: 320, // (Dimensions.get('window').width / 100) * 80,
      contentComponent: props => {
        return <ComponentHelperSiderMenu {...props} />;
      },
    },
  ),
);

export default connect(state => {
  let thisState = state['ReduxLogin'];
  let stateObj = {};

  if (thisState) {
    for (let i = 0; i < thisState.length; i++) {
      let recordItem = thisState[i];

      if (!recordItem['completed']) {
        recordItem['completed'] = true;
      }
    }
  }

  return stateObj;
})(
  class ComponentMain extends ComponentCommon {
    constructor(props) {
      super(props);

      this.state = {};
    }

    /*
                ################################################################################################################################################
                ################################################################################################################################################
                        listener
                ################################################################################################################################################
                ################################################################################################################################################
            */

    isStartedHandleNofitication = false;
    async _onReady() {}

    /*
                ################################################################################################################################################
                ################################################################################################################################################
                        render
                ################################################################################################################################################
                ################################################################################################################################################
            */
    render() {
      console.count('c.main.js render');
      // const countDown = this._timeout - this._idleCount
      return (
        <p>hehe</p>
        // <Container style={[styleApp.headerBgColor]}>
        //   <DrawerContainer
        //     ref={navigatorRef => {
        //       setTopLevelNavigator(navigatorRef);
        //     }}
        //   />
        // </Container>
      );
    }
  },
);
