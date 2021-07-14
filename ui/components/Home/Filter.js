import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ArrowDown from '../../../assets/images/arrow-down.svg';
import ListIcon from '../../../assets/images/list-selected.svg';
import GridIcon from '../../../assets/images/grid-selected.svg';
import Globals from '../../../Globals';

const Filter = () => {
  return (
    <View style={styles.all}>
      <View style={styles.order}>
        <Text style={Globals.TEXT_STYLES.gilroy_semibold_16}>Recent</Text>
        <ArrowDown style={{marginLeft: Globals.SIZES.padding_small}} />
      </View>
      <View style={styles.viewType}>
        <ListIcon style={{marginRight: Globals.SIZES.padding_medium}} />
        <GridIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Globals.SIZES.padding_big,
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  viewType: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Filter;
