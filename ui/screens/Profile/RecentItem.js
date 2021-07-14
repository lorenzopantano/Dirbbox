import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WordIcon from '../../../assets/images/word-icon.svg';
import Globals from '../../../Globals';

const RecentItem = () => {
  return (
    <View style={styles.recentItem}>
      <View style={styles.iconAndText}>
        <WordIcon />
        <View style={{marginLeft: Globals.SIZES.padding_medium}}>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_16,
              {color: Globals.COLORS.text_color_dark},
            ]}>
            Projects.docx
          </Text>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_regular_13,
              {color: Globals.COLORS.text_color_dark},
            ]}>
            November 22.2020
          </Text>
        </View>
      </View>
      <Text
        style={[
          Globals.TEXT_STYLES.gilroy_regular_13,
          {color: Globals.COLORS.text_color_dark},
        ]}>
        300 Kb
      </Text>
    </View>
  );
};

export default RecentItem;

const styles = StyleSheet.create({
  iconAndText: {
    flexDirection: 'row',
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Globals.SIZES.padding_big,
  },
});
