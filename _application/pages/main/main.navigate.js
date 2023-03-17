import { NavigationActions, StackActions } from 'react-navigation'
let _navigator

const delay = function(seconds) {
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve(true)
    }, seconds * 1000)
  })
}

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

// export function getNavigator() {
//   console.log('getNavigator inner', _navigator)
//   return _navigator
// }

export async function navigate(routeName, params) {
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    )
  } else {
    await delay(2)
    navigate(routeName, params)
  }
}

export async function reset(routeName, params) {
  if (_navigator) {
    console.log('redirecting with reset')
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName: 'app',

        params: {},

        action: StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName, params })],
        }),
      })
    )
  } else {
    console.log('ok we need more times...')
    await delay(2)
    reset(routeName, params)
  }
}
