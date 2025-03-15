import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../Components/Screen';
import MyStatusBar from '../Components/MyStatusBar';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoardingScreen');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MyStatusBar backgroundColor={'black'} />
      <Image
        style={{
          height: SCREEN_HEIGHT * 0.25,
          width: SCREEN_WIDTH * 0.45,
          borderRadius: 100,
        }}
        source={require('../Assets/Images/mysportify.jpg')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
