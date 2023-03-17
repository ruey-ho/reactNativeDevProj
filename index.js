import {Root, StyleProvider} from 'native-base';
import React from 'react';
import 'react-native-console-time-polyfill';
import {AppRegistry, StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppReducer from './_application/redux/reducer';
import AppSaga from './_application/redux/saga';
import {styleApp} from './_application/pages/styles/s.app';
import ComponentMain from './_application/pages/main/c.main';
import {name as appName} from './app.json';

console.time('Application Ready');

const sagaMiddleware = createSagaMiddleware();

let store = createStore(AppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(AppSaga);

const Container = () => (
  <Provider store={store}>
    <SafeAreaView style={[{flex: 1}, styleApp.headerColor]}>
      <StyleProvider>
        <Root>
          <StatusBar
            backgroundColor="#7d2123"
            barStyle="light-content"
            hidden={false}
          />
          <ComponentMain />
        </Root>
      </StyleProvider>
    </SafeAreaView>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Container);
