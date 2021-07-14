import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Settings,
} from 'react-native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home/Home';
import Globals from '../../Globals';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import ProfileImage from '../../assets/images/profile-image.svg';
import {useRoute} from '@react-navigation/native';
import SettingsStack from './Settings/SettingsStack';
import Profile from './Profile/Profile';
import Storage from './Storage/Storage';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const route = useRoute();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      drawerStyle={styles.drawerStyle}
      edgeWidth={Globals.SIZES.screenWidth / 4}
      drawerContent={CustomDrawerContent}
      drawerContentOptions={{
        activeTintColor: Globals.COLORS.text_color_dark,
        activeBackgroundColor: 'transparent',
        inactiveTintColor: Globals.COLORS.text_color_light,
        itemStyle: {
          borderRadius: 0,
        },
        labelStyle: Globals.TEXT_STYLES.gilroy_bold_18,
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Storage" component={Storage} />
      <Drawer.Screen name="Shared" component={Home} />
      <Drawer.Screen name="Stats" component={Home} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
      <Drawer.Screen name="Help" component={Home} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = props => {
  return (
    <View style={styles.content} {...props}>
      <DrawerHeader navigation={props.navigation} />
      <View>
        <DrawerItemList {...props} />
      </View>
      <View>
        <DrawerItem
          label="Logout"
          labelStyle={[
            Globals.TEXT_STYLES.gilroy_bold_18,
            {marginLeft: -Globals.SIZES.padding_medium},
          ]}
          icon={() => (
            <Icon
              name="power"
              size={24}
              color={Globals.COLORS.text_color_dark}
            />
          )}
          onPress={() => props.navigation.navigate('Welcome')}
          activeTintColor={Globals.COLORS.text_color_dark}
          inactiveTintColor={Globals.COLORS.text_color_dark}
          activeBackgroundColor={'transparent'}
          inactiveBackgroundColor={'transparent'}
        />
        <DrawerItem
          label="Version 2.0.1"
          labelStyle={[Globals.TEXT_STYLES.gilroy_medium_12]}
          activeTintColor={Globals.COLORS.text_color_dark}
          inactiveTintColor={Globals.COLORS.text_color_dark}
          activeBackgroundColor={'transparent'}
          inactiveBackgroundColor={'transparent'}
        />
      </View>
    </View>
  );
};

const DrawerHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <ProfileImage />
        <View style={styles.headerLeftText}>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_semibold_16,
              {color: Globals.COLORS.text_color_dark},
            ]}>
            Neelesh
          </Text>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_12,
              {color: Globals.COLORS.text_color_light},
            ]}>
            Seattle, Washington
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={navigation.closeDrawer}
        style={{marginRight: Globals.SIZES.padding_big}}>
        <Icon name="x" size={30} color={Globals.COLORS.text_color_dark} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    width: Globals.SIZES.screenWidth,
    backgroundColor: Globals.COLORS.drawer_backgroud,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    borderBottomRightRadius: Globals.SIZES.padding_big * 2,
    padding: Globals.SIZES.padding_big + Globals.SIZES.padding_small,
  },
  headerLeftText: {
    flexDirection: 'column',
    marginLeft: Globals.SIZES.padding_small,
  },
});

export default DrawerNavigation;
