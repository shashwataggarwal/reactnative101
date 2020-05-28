// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const tabBarTheme = {
    '.tabIcon': {
      height: undefined
    },
    '.vertical': {
      height: 90
    },
    'NativeBase.Button': {
      '.transparent': {
        'NativeBase.Text': {
          fontSize: variables.tabFontSize,
          color: variables.sTabBarActiveTextColor,
          fontWeight: '400'
        },
        'NativeBase.IconNB': {
          color: variables.sTabBarActiveTextColor
        }
      },
      'NativeBase.IconNB': {
        color: variables.sTabBarActiveTextColor
      },
      'NativeBase.Text': {
        fontSize: variables.tabFontSize,
        color: variables.sTabBarActiveTextColor,
        fontWeight: '400'
      },
      '.isTabActive': {
        'NativeBase.Text': {
          fontWeight: '900'
        }
      },
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'transparent',
      backgroundColor: variables.tabBgColor
    },
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#FF0000',
    backgroundColor: variables.tabBgColor,
    // borderRadius:20
  };

  return tabBarTheme;
};
