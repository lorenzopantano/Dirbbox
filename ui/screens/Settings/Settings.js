import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Globals from '../../../Globals';
import Icon from 'react-native-vector-icons/Feather';

const Settings = ({navigation}) => {
  const [isEnabledOne, setIsEnabledOne] = useState(true);
  const toggleSwitchOne = () =>
    setIsEnabledOne(previousState => !previousState);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const toggleSwitchTwo = () =>
    setIsEnabledTwo(previousState => !previousState);

  return (
    <ScrollView style={styles.settingsView}>
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
          Settings
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.topSettings}>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_18,
              {
                color: Globals.COLORS.text_color_dark,
                paddingVertical: Globals.SIZES.padding_medium,
              },
            ]}>
            Add Account
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Change Password')}>
            <Text
              style={[
                Globals.TEXT_STYLES.gilroy_medium_18,
                {
                  color: Globals.COLORS.text_color_dark,
                  paddingVertical: Globals.SIZES.padding_medium,
                },
              ]}>
              Change Password
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_18,
              {
                color: Globals.COLORS.text_color_dark,
                paddingVertical: Globals.SIZES.padding_medium,
              },
            ]}>
            Change Language
          </Text>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_18,
              {
                color: Globals.COLORS.text_color_dark,
                paddingVertical: Globals.SIZES.padding_medium,
              },
            ]}>
            Upgrade Plan
          </Text>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_18,
              {
                color: Globals.COLORS.text_color_dark,
                paddingVertical: Globals.SIZES.padding_medium,
              },
            ]}>
            Multiple Account
          </Text>
        </View>
        <View style={styles.bottomSettings}>
          <View style={styles.switchSetting}>
            <Text
              style={[
                isEnabledOne
                  ? Globals.TEXT_STYLES.gilroy_bold_18
                  : Globals.TEXT_STYLES.gilroy_medium_18,
                {color: Globals.COLORS.text_color_dark},
              ]}>
              Enable Sync
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#00BCD4'}}
              thumbColor={isEnabledOne ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#00BCD4"
              onValueChange={toggleSwitchOne}
              value={isEnabledOne}
            />
          </View>
          <View style={styles.switchSetting}>
            <Text
              style={[
                isEnabledTwo
                  ? Globals.TEXT_STYLES.gilroy_bold_18
                  : Globals.TEXT_STYLES.gilroy_medium_18,
                {color: Globals.COLORS.text_color_dark},
              ]}>
              Enable 2 Step Verification
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#00BCD4'}}
              thumbColor={isEnabledTwo ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#00BCD4"
              onValueChange={toggleSwitchTwo}
              value={isEnabledTwo}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  settingsView: {
    padding: Globals.SIZES.padding_big,
    marginTop: Globals.SIZES.padding_big,
  },
  topSettings: {},
  bottomSettings: {},
  switchSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Globals.SIZES.padding_medium,
  },
});

export default Settings;
