import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Globals from '../../../Globals';

const PasswordField = ({title}) => {
  return (
    <View style={styles.inputArea}>
      <Text style={[styles.title, Globals.TEXT_STYLES.gilroy_medium_14]}>
        {title}
      </Text>
      <TextInput
        style={[styles.input, Globals.TEXT_STYLES.gilroy_medium_16]}
        keyboardType="visible-password"></TextInput>
    </View>
  );
};

export default PasswordField;

const styles = StyleSheet.create({
  inputArea: {
    marginVertical: Globals.SIZES.padding_medium,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Globals.COLORS.text_color_light,
    padding: Globals.SIZES.padding_medium,
  },
  title: {
    color: Globals.COLORS.text_color_dark,
    marginBottom: Globals.SIZES.padding_small,
  },
});
