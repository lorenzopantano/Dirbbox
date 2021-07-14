import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  illustration: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  emptyView: {
    flex: 2.5,
  },
  dirbboxText: {
    paddingBottom: Globals.SIZES.padding_medium,
    color: Globals.COLORS.text_color_dark,
  },
  bestCloud: {
    paddingBottom: Globals.SIZES.padding_big,
    color: Globals.COLORS.text_color_light,
  },
  textBox: {
    width: '70%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Globals.SIZES.padding_big,
  },
  topContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 3,
  },
  content: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: Globals.SIZES.padding_big,
  },
  smartidButton: {
    width:
      (Globals.SIZES.screenWidth -
        Globals.SIZES.padding_big * 2 -
        Globals.SIZES.padding_medium) /
      2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Globals.COLORS.blue_secondary,
    borderRadius: 10,
    paddingVertical: Globals.SIZES.padding_medium,
  },
  signInButton: {
    width:
      (Globals.SIZES.screenWidth -
        Globals.SIZES.padding_big * 2 -
        Globals.SIZES.padding_medium) /
      2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Globals.COLORS.blue_primary,
    borderRadius: 10,
    paddingHorizontal: Globals.SIZES.padding_big + Globals.SIZES.padding_medium,
    paddingVertical: Globals.SIZES.padding_medium,
  },
  socialLogin: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  socialIcons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: Globals.SIZES.padding_big,
  },
});

export {styles};
