import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Globals from '../../../Globals';
import Illustration from '../../../assets/images/illustration.svg';
import Fingerprint from '../../../assets/images/fingerprint.svg';
import ArrowSignIn from '../../../assets/images/arrowsignin.svg';
import Instagram from '../../../assets/images/instagram.svg';
import Facebook from '../../../assets/images/facebook.svg';
import Twitter from '../../../assets/images/twitter.svg';
import {styles} from './styles';

const Welcome = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Illustration
        width={Globals.SIZES.screenWidth}
        style={styles.illustration}
      />
      <View style={styles.content}>
        <View style={styles.emptyView}></View>
        <View style={styles.topContent}>
          <View style={styles.textBox}>
            <Text
              style={[
                Globals.TEXT_STYLES.gilroy_regular_20,
                {color: Globals.COLORS.text_color_dark},
              ]}>
              Welcome to
            </Text>
            <Text
              style={[Globals.TEXT_STYLES.gilroy_bold_36, styles.dirbboxText]}>
              Dirbbox
            </Text>
            <Text
              style={[Globals.TEXT_STYLES.gilroy_medium_16, styles.bestCloud]}>
              Best cloud storage platform for all business and individuals to
              manage their data
            </Text>
            <Text
              style={[
                Globals.TEXT_STYLES.gilroy_medium_16,
                {color: Globals.COLORS.text_color_light},
              ]}>
              Join For Free.
            </Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                console.warn('Smart ID pressed');
                navigation.navigate('Home');
              }}>
              <View style={styles.smartidButton}>
                <Fingerprint />
                <Text
                  style={[
                    Globals.TEXT_STYLES.gilroy_semibold_16,
                    {
                      marginLeft: Globals.SIZES.padding_small,
                      color: Globals.COLORS.blue_primary,
                    },
                  ]}>
                  Smart Id
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('Sign In pressed');
                navigation.navigate('Home');
              }}
              style={styles.signInButton}>
              <Text
                style={[
                  Globals.TEXT_STYLES.gilroy_semibold_16,
                  {marginRight: Globals.SIZES.padding_small, color: 'white'},
                ]}>
                Sign In
              </Text>
              <ArrowSignIn />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialLogin}>
          <Text
            style={[
              Globals.TEXT_STYLES.gilroy_medium_14,
              {color: Globals.COLORS.text_color_darker},
            ]}>
            Use Social Login
          </Text>
          <View style={styles.socialIcons}>
            <Instagram />
            <Twitter />
            <Facebook />
          </View>
          <Pressable onPress={() => console.warn('Create an account pressed')}>
            <Text
              style={[
                Globals.TEXT_STYLES.gilroy_medium_18,
                {color: Globals.COLORS.text_color_darker},
              ]}>
              Create an account
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
