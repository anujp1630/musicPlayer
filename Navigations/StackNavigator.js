import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Src/Screens/Splash';
import Login from '../Src/Screens/Login';
import Home from '../Src/Screens/Home';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> */}
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})