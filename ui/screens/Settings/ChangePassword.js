import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Globals from '../../../Globals';
import Icon from 'react-native-vector-icons/Feather';
import PasswordField from './PasswordField';

const ChangePassword = ({navigation}) => {
  return (
    <View style={styles.settingsView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            size={30}
            color={Globals.COLORS.text_color_dark}
          />
        </TouchableOpacity>
        <Text
          style={[
            Globals.TEXT_STYLES.gilroy_bold_36,
            {
              color: Globals.COLORS.text_color_darker,
              marginVertical: Globals.SIZES.padding_big,
            },
          ]}>
          Change Password
        </Text>
        <PasswordField title="Current Password" />
        <PasswordField title="New Password" />
        <PasswordField title="Confirm New Password" />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  settingsView: {
    padding: Globals.SIZES.padding_big,
    marginTop: Globals.SIZES.padding_big,
  },
});
