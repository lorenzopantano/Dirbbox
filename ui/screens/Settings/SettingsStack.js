import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from './Settings';
import ChangePassword from './ChangePassword';

const SettingsStackNavigator = createStackNavigator();

const SettingsStack = () => {
  return (
    <SettingsStackNavigator.Navigator headerMode={'none'}>
      <SettingsStackNavigator.Screen name="Settings" component={Settings} />
      <SettingsStackNavigator.Screen
        name="Change Password"
        component={ChangePassword}
      />
    </SettingsStackNavigator.Navigator>
  );
};

export default SettingsStack;
