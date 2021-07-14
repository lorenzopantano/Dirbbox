import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FolderBlue from '../../../assets/images/folder-blue.svg';
import FolderGreen from '../../../assets/images/folder-green.svg';
import FolderRed from '../../../assets/images/folder-red.svg';
import FolderYellow from '../../../assets/images/folder-yellow.svg';
import OptionsIconBlue from '../../../assets/images/options-blue.svg';
import OptionsIconRed from '../../../assets/images/options-red.svg';
import OptionsIconYellow from '../../../assets/images/options-yellow.svg';
import OptionsIconGreen from '../../../assets/images/options-green.svg';
import Globals from '../../../Globals';

const FolderItem = ({item, viewType}) => {
  return (
    <View
      style={[
        item.id % 4 === 1
          ? styles.blue_folder
          : item.id % 4 === 2
          ? styles.yellow_folder
          : item.id % 4 === 3
          ? styles.red_folder
          : styles.green_folder,
        viewType === 'grid' ? styles.grid : styles.list,
      ]}>
      <View style={styles.folderIconRow}>
        {item.id % 4 === 1 ? (
          <FolderBlue />
        ) : item.id % 4 === 2 ? (
          <FolderYellow />
        ) : item.id % 4 === 3 ? (
          <FolderRed />
        ) : (
          <FolderGreen />
        )}
        {item.id % 4 === 1 ? (
          <OptionsIconBlue />
        ) : item.id % 4 === 2 ? (
          <OptionsIconYellow />
        ) : item.id % 4 === 3 ? (
          <OptionsIconRed />
        ) : (
          <OptionsIconGreen />
        )}
      </View>
      <Text
        style={[
          item.id % 4 === 1
            ? styles.blue_text
            : item.id % 4 === 2
            ? styles.yellow_text
            : item.id % 4 === 3
            ? styles.red_text
            : styles.green_text,
          Globals.TEXT_STYLES.gilroy_medium_16,
        ]}>
        {item.title}
      </Text>
      <Text
        style={[
          item.id % 4 === 1
            ? styles.blue_text
            : item.id % 4 === 2
            ? styles.yellow_text
            : item.id % 4 === 3
            ? styles.red_text
            : styles.green_text,
          Globals.TEXT_STYLES.gilroy_regular_13,
        ]}>
        {item.date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  folderIconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Globals.SIZES.padding_medium,
  },
  grid: {
    width:
      (Globals.SIZES.screenWidth -
        Globals.SIZES.padding_big * 2 -
        Globals.SIZES.padding_medium) /
      2,
    flexDirection: 'column',
    padding: Globals.SIZES.padding_medium,
    marginRight: Globals.SIZES.padding_medium,
    borderRadius: 20,
  },
  list: {
    padding: Globals.SIZES.padding_medium,
    borderRadius: 20,
  },
  blue_folder: {
    backgroundColor: Globals.COLORS.blue_folder,
  },
  yellow_folder: {
    backgroundColor: Globals.COLORS.yellow_folder,
  },
  red_folder: {
    backgroundColor: Globals.COLORS.red_folder,
  },
  green_folder: {
    backgroundColor: Globals.COLORS.green_folder,
  },
  blue_text: {
    color: Globals.COLORS.blue_text,
  },
  yellow_text: {
    color: Globals.COLORS.yellow_text,
  },
  red_text: {
    color: Globals.COLORS.red_text,
  },
  green_text: {
    color: Globals.COLORS.green_text,
  },
});

export default FolderItem;
