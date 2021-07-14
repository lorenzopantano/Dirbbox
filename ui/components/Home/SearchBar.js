import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import SearchIcon from '../../../assets/images/search.svg';
import Globals from '../../../Globals';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <SearchIcon />
      <TextInput
        placeholder="Search Folder"
        placeholderTextColor={Globals.COLORS.text_color_dark}
        style={{
          fontFamily: 'Gilroy-SemiBold',
          flex: 1,
        }}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    borderColor: Globals.COLORS.unselected_icon,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Globals.SIZES.padding_medium,
    paddingVertical: Globals.SIZES.padding_small,
  },
});

export default SearchBar;
