import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Components/Screen';
import {colors} from '../Components/Constants';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#2E2E2E', '#000000']}
      style={{
        flex: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: SCREEN_HEIGHT * 0.3,
          gap: SCREEN_HEIGHT * 0.02,
        }}>
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.1,
            width: SCREEN_WIDTH * 0.2,
            resizeMode: 'contain',
          }}
          source={require('../Assets/Images/whitelogo.png')}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.white_color,
              fontWeight: '500',
              fontSize: 35,
            }}>
            Millions of songs.
          </Text>
          <Text
            style={{
              color: colors.white_color,
              fontWeight: '500',
              fontSize: 30,
            }}>
            Free on Sportify.
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: SCREEN_WIDTH * 0.08,
          gap: SCREEN_HEIGHT * 0.008,
          paddingTop: SCREEN_HEIGHT * 0.26,
        }}>
        <TouchableOpacity
          style={{
            elevation: 1,
            backgroundColor: '#1DB954',
            paddingVertical: SCREEN_HEIGHT * 0.02,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontSize: 14,
            }}>
            Sign up for free
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            borderWidth: 1,

            borderRadius: 100,
            width: '100%',
            borderWidth: 1,
            borderColor: 'white',
          }}>
          <LinearGradient
            colors={['#4B4B4B', '#000000']}
            style={{
              borderRadius: 100,
              alignItems: 'center',
              paddingVertical: SCREEN_HEIGHT * 0.02,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 14,
              }}>
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

export default OnBoardingScreen;
