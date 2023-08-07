import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator(); 

const AppStack = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  ); 
};

export default AppStack;
