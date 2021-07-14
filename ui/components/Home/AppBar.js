import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Menu from '../../../assets/images/menu.svg';
import Globals from '../../../Globals';

const AppBar = ({navigation}) => {
  return (
    <View style={styles.appbar}>
      <Text
        style={[
          Globals.TEXT_STYLES.gilroy_semibold_24,
          {color: Globals.COLORS.text_color_dark},
        ]}>
        Your Dirbbox
      </Text>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Menu />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    marginVertical: Globals.SIZES.padding_big,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AppBar;
