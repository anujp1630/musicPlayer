import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Components/Screen';
import {colors} from '../Components/Constants';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Login = () => {
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
          paddingTop: SCREEN_HEIGHT * 0.2,
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
              fontSize: 30,
            }}>
            Log in to Sportify'
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: SCREEN_WIDTH * 0.05,
          gap: SCREEN_HEIGHT * 0.02,
          paddingTop: SCREEN_HEIGHT * 0.1,
        }}>
        <View
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
              paddingHorizontal: SCREEN_WIDTH * 0.05,
              flexDirection: 'row',
              alignItems: 'center',
              gap: SCREEN_WIDTH * 0.04,
            }}>
            <AntDesign name="mail" size={20} color={'white'} />
            <TextInput
              placeholder="Email or username"
              placeholderTextColor={'white'}
            />
          </LinearGradient>
        </View>
        <View
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
              paddingHorizontal: SCREEN_WIDTH * 0.08,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput placeholder="Password" placeholderTextColor={'white'} />
            <Entypo name="eye" size={20} color={'white'} />
          </LinearGradient>
        </View>
        <View style={{paddingTop: SCREEN_HEIGHT * 0.02}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
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
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              gap: 10,
              paddingTop: SCREEN_HEIGHT * 0.025,
            }}>
            <Text
              style={{
                color: colors.white_color,
                fontWeight: '400',
                fontSize: 13,
              }}>
              Dont't have an account ?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: colors.white_color,
                  fontWeight: '500',
                  fontSize: 15,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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

export default Login;
