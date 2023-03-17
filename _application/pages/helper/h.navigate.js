import {HelperNavigateENUM} from './h.navigateEnum';

import ComponentLogin from '../login/c.login';
// import ComponentLogout from '../logout/c.logout';
// import ComponentHome from '../home/c.home';

const NavigateList = [
  {
    path: HelperNavigateENUM.PATH_LOGIN,
    name: 'Login',
    component: ComponentLogin,
  },
  // {
  //   path: HelperNavigateENUM.PATH_LOGOUT,
  //   name: 'Logout',
  //   component: ComponentLogout,
  // },

  // {
  //   path: HelperNavigateENUM.PATH_HOME,
  //   name: 'Home',
  //   component: ComponentHome,
  // },
];

export default new (class HelperNavigateUtil {
  route(navigateObj, path, data) {
    navigateObj.navigate(path, data !== undefined ? data : {});
  }

  getNavigate() {
    let navigateObj = {};
    for (let i = 0; i < NavigateList.length; i++) {
      let item = NavigateList[i];

      navigateObj[item['path']] = {
        screen: item['component'],
      };
    }
    return navigateObj;
  }

  getName(key) {
    return '';
  }
})();
