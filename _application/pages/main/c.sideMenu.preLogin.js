import React from 'react';
import {Dimensions} from 'react-native';
import {CommonComponent} from '../abstract/common';

const Height = Dimensions.get('window').height;
const isTablet = Dimensions.get('window').width > 599;
const style = {};

class ComponentSideMenuPreLogin extends CommonComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <p>Pre Login</p>;
  }
}

export default ComponentSideMenuPreLogin;
