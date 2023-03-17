import {Card, CardItem, Container, Content} from 'native-base';
import React from 'react';
import {Image, Platform, View, Dimensions} from 'react-native';

import {connect} from 'react-redux';

import ReduxActionLogin, {
  ReduxEnumLogin,
} from '../../redux/action/reduxAction.login';

import {CommonComponent} from '../abstract/common';

const isIos = Platform.OS === 'ios';
const isTablet = Dimensions.get('window').width > 599;

export default connect(state => {
  let thisState = [...state['ReduxLogin']];
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
  class ComponentLogin extends CommonComponent {
    // #region Data
    _thisIsLive = true;

    constructor(props) {
      super(props);

      console.log(
        'ComponentLogin : constructor : *** : [' + this.uuid() + '] ',
      );

      this.state = {};
    }

    async _onReady() {}

    renderLogin() {
      <p>Login Page</p>;
    }

    // #region RENDER
    render() {
      const {additionalVerification, isSuccess, successMessage} = this.state;
      console.count('c.login.js render');

      return (
        <Container>
          <Content
            ref={r => (this.component = r)}
            padder
            enableResetScrollToCoords={false}
            style={{
              alignContent: 'center',
              backgroundColor: this._isTablet() ? '#fff' : '#EF4233',
            }}>
            <View
              style={{
                paddingTop: this._isTablet() ? 50 : 0,
                paddingHorizontal: this._isTablet() ? 100 : 0,
              }}>
              {/* Login */}
              <Card style={{marginBottom: 20}}>
                <CardItem
                  style={{
                    // flex: 1,
                    backgroundColor: 'white',
                    // position: 'relative',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></CardItem>
                <CardItem>{this.renderLogin()}</CardItem>
              </Card>
            </View>
          </Content>
        </Container>
      );
    }
  },
);
