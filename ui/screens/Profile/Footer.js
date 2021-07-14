import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Globals from '../../../Globals';
import Sort from '../../../assets/images/sort.svg';
import RecentItem from './RecentItem';

const Footer = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text
          style={[
            Globals.TEXT_STYLES.gilroy_semibold_16,
            {color: Globals.COLORS.text_color_dark},
          ]}>
          Recent Uploads
        </Text>
        <Sort />
      </View>
      <RecentItem />
      <RecentItem />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Globals.SIZES.padding_big,
  },
});
