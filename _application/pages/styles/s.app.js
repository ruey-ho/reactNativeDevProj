import { StyleSheet } from 'react-native'

export const styleApp = StyleSheet.create({
  headerBgColor: {
    // backgroundColor : '#7d2123' /* ####  dark red  #### */
    backgroundColor: '#EF4233' /* ####  light red  #### */,
  },

  headerColor: {
    backgroundColor: '#ef4233' /* ####  light red  #### */,
  },

  containerBgColor: {
    backgroundColor: 'rgba(106, 104, 102 , 0.2)',
  },

  panelBgColor: {
    backgroundColor: 'white',
  },

  backgroundColorGrey: {
    backgroundColor: 'rgba( 226, 229, 231, 1 )',
  },

  backgroundColorGreyDark: {
    backgroundColor: 'rgba( 132, 135, 137, 1 )',
  },

  borderBottom: {
    borderLeftColor: 'transparent',
    borderBottomColor: 'rgba( 209, 204, 199 , 1 )',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 1,
  },

  borderBottomError: {
    borderLeftColor: 'transparent',
    borderBottomColor: '#DE0707',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 2,
  },

  shadow: {
    shadowColor: '#000000',
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 1,
  },
})
