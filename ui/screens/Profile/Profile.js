import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Globals from '../../../Globals';
import Footer from './Footer';
import MyFolderSection from './MyFolderSection';
import ProfileHeader from './ProfileHeader';

const Profile = () => {
  const [theme, setTheme] = useState('light');

  const updateTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else setTheme('light');
  };

  return (
    <ScrollView style={styles.profileView}>
      <View style={styles.header}>
        <FeatherIcon
          name="chevron-left"
          size={30}
          color={Globals.COLORS.text_color_dark}
        />
        <Text
          style={[
            Globals.TEXT_STYLES.gilroy_semibold_16,
            {color: Globals.COLORS.text_color_dark},
          ]}>
          My Profile
        </Text>
        <TouchableOpacity onPress={updateTheme}>
          <SimpleLineIcons
            name="options"
            color={Globals.COLORS.text_color_dark}
            size={24}
          />
        </TouchableOpacity>
      </View>
      <ProfileHeader theme={theme} />
      <MyFolderSection />
      <Footer />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileView: {
    padding: Globals.SIZES.padding_big,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Globals.SIZES.padding_big,
  },
});
