import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default Globals = {
  SIZES: {
    screenWidth: screenWidth,
    screenHeight: screenHeight,
    screenHeightHalf: screenHeight / 1.7,
    padding_big: 30,
    padding_medium: 16,
    padding_small: 8,
  },
  COLORS: {
    text_color_darker: '#0C0C41',
    text_color_dark: '#22215B',
    text_color_light: '#7A7A9C',
    blue_primary: '#567DF4',
    blue_secondary: '#ebf1fd',
    blue_text: '#415EB6',
    blue_folder: '#EEF7FE',
    yellow_primary: '#FFC700',
    yellow_secondary: '#FFDE6C',
    yellow_text: '#FFB110',
    yellow_folder: '#FFFBEC',
    red_primary: '#F45656',
    red_secondary: '#FEEEEE',
    red_text: '#AC4040',
    red_folder: '#FEEEEE',
    green_primary: '#34DEDE',
    green_secondary: '#F0FFFF',
    green_text: '#23B0B0',
    green_folder: '#F0FFFF',
    unselected_icon: '#B0C0D0',
    search_border: '#EEF2FE',
    images: '#FFC700',
    video: '#4CE364',
    documents: '#567DF4',
    others: '#FF842B',
    drawer_backgroud: '#F1F3F6',
  },
  TEXT_STYLES: {
    gilroy_bold_36: {
      fontFamily: 'Gilroy-Bold',
      fontSize: 36,
    },
    gilroy_bold_18: {
      fontFamily: 'Gilroy-Bold',
      fontSize: 18,
    },
    gilroy_medium_14: {
      fontFamily: 'Gilroy-Medium',
      fontSize: 14,
    },
    gilroy_semibold_16: {
      fontFamily: 'Gilroy-SemiBold',
      fontSize: 16,
    },
    gilroy_semibold_24: {
      fontFamily: 'Gilroy-SemiBold',
      fontSize: 24,
    },
    gilroy_regular_20: {
      fontFamily: 'Gilroy-Regular',
      fontSize: 20,
    },
    gilroy_medium_18: {
      fontFamily: 'Gilroy-Medium',
      fontSize: 18,
    },
    gilroy_medium_12: {
      fontFamily: 'Gilroy-Medium',
      fontSize: 12,
    },
    gilroy_medium_16: {
      fontFamily: 'Gilroy-Medium',
      fontSize: 16,
    },
    gilroy_regular_13: {
      fontFamily: 'Gilroy-Regular',
      fontSize: 13,
    },
  },
};
