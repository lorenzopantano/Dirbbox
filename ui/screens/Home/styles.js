import {StyleSheet} from 'react-native';
import Globals from '../../../Globals';

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: Globals.SIZES.padding_big,
    paddingTop: Globals.SIZES.padding_big,
    backgroundColor: 'white',
    height: '100%',
  },
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

const data = [
  {
    id: 1,
    title: 'Mobile Apps',
    date: 'December 20.2020',
  },
  {
    id: 2,
    title: 'SVG Icons',
    date: 'November 10.2020',
  },
  {
    id: 3,
    title: 'Prototypes',
    date: 'December 20.2020',
  },
  {
    id: 4,
    title: 'Avatars',
    date: 'December 14.2020',
  },
  {
    id: 5,
    title: 'Design',
    date: 'Febuary 12.2020',
  },
  {
    id: 6,
    title: 'Portfolio',
    date: 'November 10.2020',
  },
  {
    id: 7,
    title: 'References',
    date: 'December 20.2020',
  },
  {
    id: 8,
    title: 'Clients',
    date: 'November 30.2020',
  },
  {
    id: 9,
    title: 'Documents',
    date: 'December 4.2020',
  },
  {
    id: 10,
    title: 'Images',
    date: 'November 2.2020',
  },
  {
    id: 11,
    title: 'Mobile Apps',
    date: 'December 20.2020',
  },
  {
    id: 12,
    title: 'SVG Icons',
    date: 'November 10.2020',
  },
  {
    id: 13,
    title: 'Prototypes',
    date: 'December 20.2020',
  },
  {
    id: 14,
    title: 'Avatars',
    date: 'December 14.2020',
  },
  {
    id: 15,
    title: 'Design',
    date: 'Febuary 12.2020',
  },
  {
    id: 16,
    title: 'Portfolio',
    date: 'November 10.2020',
  },
  {
    id: 17,
    title: 'References',
    date: 'December 20.2020',
  },
  {
    id: 18,
    title: 'Clients',
    date: 'November 30.2020',
  },
  {
    id: 19,
    title: 'Documents',
    date: 'December 4.2020',
  },
  {
    id: 20,
    title: 'Images',
    date: 'November 2.2020',
  },
];

export {styles, data};
