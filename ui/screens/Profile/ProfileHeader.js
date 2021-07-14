import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfileImage from '../../../assets/images/profile-image.svg';
import Globals from '../../../Globals';

const ProfileHeader = ({theme}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor:
            theme === 'light' ? '#fcfcfc' : Globals.COLORS.text_color_dark,
        },
      ]}>
      <ProfileImage />
      <Text
        style={[
          Globals.TEXT_STYLES.gilroy_bold_18,
          {
            color: theme === 'light' ? Globals.COLORS.text_color_dark : 'white',
            marginTop: Globals.SIZES.padding_small,
          },
        ]}>
        Neelesh Chaudhary
      </Text>
      <Text
        style={[
          Globals.TEXT_STYLES.gilroy_regular_13,
          {
            color: theme === 'light' ? Globals.COLORS.text_color_dark : 'white',
            marginVertical: Globals.SIZES.padding_small,
          },
        ]}>
        UI / UX Designer
      </Text>
      <Text
        style={[
          Globals.TEXT_STYLES.gilroy_regular_13,
          {
            color: theme === 'light' ? Globals.COLORS.text_color_light : 'gray',
            textAlign: 'center',
          },
        ]}>
        I sistemi ADAS dovranno essere di serie su tutte le vetture di nuova
        produzione a partire dal 2022.
      </Text>
      <Text style={[Globals.TEXT_STYLES.gilroy_medium_14, styles.proBadge]}>
        PRO
      </Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    padding: Globals.SIZES.padding_big,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
  },
  proBadge: {
    position: 'absolute',
    top: 30,
    right: 30,
    color: 'white',
    backgroundColor: '#FF317B',
    paddingHorizontal: Globals.SIZES.padding_small,
    paddingVertical: Globals.SIZES.padding_small / 2,
    borderRadius: 5,
  },
});
