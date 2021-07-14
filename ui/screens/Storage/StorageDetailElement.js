import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Globals from '../../../Globals';

const StorageDetailElement = ({dummyData}) => {
  return (
    <View style={styles.element}>
      <View style={styles.left}>
        <View style={styles.topLeft}>
          <View
            style={{
              width: Globals.SIZES.padding_medium,
              height: Globals.SIZES.padding_medium,
              borderRadius: Globals.SIZES.padding_medium,
              backgroundColor: dummyData.color,
              marginRight: Globals.SIZES.padding_small,
            }}
          />
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_18,
              {color: Globals.COLORS.text_color_dark},
            ]}>
            {dummyData.title}
          </Text>
        </View>
        <Text
          style={[
            Globals.TEXT_STYLES.gilroy_medium_12,
            {
              color: Globals.COLORS.text_color_light,
              marginTop: Globals.SIZES.padding_small / 4,
              marginLeft:
                Globals.SIZES.padding_medium + Globals.SIZES.padding_small,
            },
          ]}>
          {dummyData.space} GB
        </Text>
      </View>
      <View
        style={{
          position: 'relative',
          width: Globals.SIZES.screenWidth / 3,
          height: 3,
          borderRadius: 5,
          backgroundColor: '#EEF7FE',
        }}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width:
              (((dummyData.space * 100) / 84.64) *
                (Globals.SIZES.screenWidth / 3)) /
              100,
            height: 3,
            borderRadius: 5,
            backgroundColor: dummyData.color,
          }}></View>
      </View>
    </View>
  );
};

export default StorageDetailElement;

const styles = StyleSheet.create({
  element: {
    marginVertical: Globals.SIZES.padding_medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
