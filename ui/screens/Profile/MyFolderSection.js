import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Globals from '../../../Globals';
import FolderItem from '../../components/Home/FolderItem';
import {data} from '../Home/styles';

const MyFolderSection = () => {
  const renderItem = ({item}) => {
    return (
      <View>
        <FolderItem item={item} />
      </View>
    );
  };

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text
          style={[
            Globals.TEXT_STYLES.gilroy_semibold_16,
            {color: Globals.COLORS.text_color_dark},
          ]}>
          My Folders
        </Text>
        <View style={styles.icons}>
          <EntypoIcon
            name="plus"
            size={24}
            color={Globals.COLORS.text_color_dark}
          />
          <IonIcon
            name="options"
            size={24}
            color={Globals.COLORS.text_color_dark}
            style={{marginHorizontal: Globals.SIZES.padding_medium}}
          />
          <FeatherIcon
            name="chevron-right"
            color={Globals.COLORS.text_color_dark}
            size={24}
          />
        </View>
      </View>
      <View style={styles.folders}>
        <FolderItem item={data[0]} viewType="grid" />
        <FolderItem item={data[1]} viewType="grid" />
      </View>
      <View style={[styles.folders, {marginTop: Globals.SIZES.padding_medium}]}>
        <FolderItem item={data[2]} viewType="grid" />
        <FolderItem item={data[3]} viewType="grid" />
      </View>
    </View>
  );
};

export default MyFolderSection;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Globals.SIZES.padding_big,
  },
  icons: {
    flexDirection: 'row',
  },
  folders: {
    flexDirection: 'row',
  },
});
