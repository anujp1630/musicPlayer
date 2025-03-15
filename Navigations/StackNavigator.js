import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Src/Screens/Splash';
import Login from '../Src/Screens/Login';
import Home from '../Src/Screens/Home';
import OnBoardingScreen from '../Src/Screens/OnBoardingScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
