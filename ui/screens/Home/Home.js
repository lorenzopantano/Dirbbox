import React, {useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import Globals from '../../../Globals';
import AppBar from '../../components/Home/AppBar';
import Filter from '../../components/Home/Filter';
import FolderItem from '../../components/Home/FolderItem';
import SearchBar from '../../components/Home/SearchBar';
import ArrowDown from '../../../assets/images/arrow-down.svg';
import ListIconUnselected from '../../../assets/images/list-unselected.svg';
import GridIcon from '../../../assets/images/grid-selected.svg';
import GridIconUnselected from '../../../assets/images/grid-unselected.svg';
import ListIcon from '../../../assets/images/list-selected.svg';
import {styles, data} from './styles';
import FloatingButton from '../../components/Home/FloatingButton';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  const [viewType, setViewType] = useState('grid');

  const renderItem = ({item}) => {
    return <FolderItem item={item} viewType={viewType} />;
  };

  const changeToListView = () => {
    setViewType(previous => {
      return 'list';
    });
  };

  const changeToGridView = () => {
    setViewType(previous => {
      return 'grid';
    });
  };

  return (
    <View style={styles.home}>
      <AppBar navigation={navigation} />
      <SearchBar />
      {/** Filter component */}
      <View style={styles.all}>
        <View style={styles.order}>
          <Text style={Globals.TEXT_STYLES.gilroy_semibold_16}>Recent</Text>
          <ArrowDown style={{marginLeft: Globals.SIZES.padding_small}} />
        </View>
        <View style={styles.viewType}>
          <Pressable onPress={changeToListView}>
            {viewType === 'grid' ? (
              <ListIconUnselected
                style={{marginRight: Globals.SIZES.padding_medium}}
              />
            ) : (
              <ListIcon style={{marginRight: Globals.SIZES.padding_medium}} />
            )}
          </Pressable>
          <Pressable onPress={changeToGridView}>
            {viewType === 'grid' ? <GridIcon /> : <GridIconUnselected />}
          </Pressable>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={viewType === 'grid' ? 2 : 1}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Footer}
        key={viewType}
        showsVerticalScrollIndicator={false}
      />
      <FloatingButton />
    </View>
  );
};

const Separator = () => {
  return (
    <View
      style={{
        width: Globals.SIZES.padding_medium,
        height: Globals.SIZES.padding_medium,
      }}></View>
  );
};

const Footer = () => {
  return <View style={{height: Globals.SIZES.padding_big}}></View>;
};

export default Home;
