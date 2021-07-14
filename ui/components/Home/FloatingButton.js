import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-vector-icons/Feather';
import Globals from '../../../Globals';

const FloatingButton = () => {
  return (
    <View style={styles.fab}>
      <Text style={[Globals.TEXT_STYLES.gilroy_semibold_24, {color: 'white'}]}>
        +
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: Globals.SIZES.padding_big * 2,
    height: Globals.SIZES.padding_big * 2,
    position: 'absolute',
    bottom: Globals.SIZES.padding_big,
    right: Globals.SIZES.padding_big,
    borderRadius: Globals.SIZES.padding_big * 2,
    backgroundColor: Globals.COLORS.text_color_dark,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButton;
