import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Pie from 'react-native-pie';
import dummyData from './dummyData';
import Globals from '../../../Globals';
import StorageDetailElement from './StorageDetailElement';

const Storage = ({navigation}) => {
  const totalStorage = 128;
  const availableStorage = 43.46;
  const occupiedStorage = 84.64;

  return (
    <View style={styles.storageView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FeatherIcon
            name="chevron-left"
            size={30}
            color={Globals.COLORS.text_color_dark}
          />
        </TouchableOpacity>
        <Text
          style={[
            Globals.TEXT_STYLES.gilroy_semibold_16,
            {color: Globals.COLORS.text_color_dark},
          ]}>
          Storage Details
        </Text>
        <SimpleLineIcons
          name="options"
          color={Globals.COLORS.text_color_dark}
          size={24}
        />
      </View>
      <View style={styles.pie}>
        <Pie
          radius={80}
          innerRadius={35}
          sections={[
            {
              percentage: (dummyData[0].space * totalStorage) / 100,
              color: dummyData[0].color,
            },
            {
              percentage: (dummyData[1].space * totalStorage) / 100,
              color: dummyData[1].color,
            },
            {
              percentage: (dummyData[2].space * totalStorage) / 100,
              color: dummyData[2].color,
            },
            {
              percentage: (dummyData[3].space * totalStorage) / 100,
              color: dummyData[3].color,
            },
            {
              percentage: dummyData[4].space / totalStorage,
              color: dummyData[4].color,
            },
          ]}
          strokeCap={'butt'}
        />
      </View>
      <View style={styles.details}>
        <StorageDetailElement dummyData={dummyData[0]} />
        <StorageDetailElement dummyData={dummyData[1]} />
        <StorageDetailElement dummyData={dummyData[2]} />
        <StorageDetailElement dummyData={dummyData[3]} />
        <StorageDetailElement dummyData={dummyData[4]} />
      </View>
      <View style={styles.footer}>
        <Text
          style={[
            Globals.TEXT_STYLES.gilroy_medium_16,
            {color: Globals.COLORS.text_color_dark},
          ]}>
          Export Details
        </Text>
      </View>
    </View>
  );
};

export default Storage;

const styles = StyleSheet.create({
  storageView: {
    padding: Globals.SIZES.padding_big,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Globals.SIZES.padding_big,
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Globals.SIZES.padding_medium,
  },
  details: {
    marginTop: Globals.SIZES.padding_big,
  },
  footer: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});
