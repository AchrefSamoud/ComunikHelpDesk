import React, {useContext} from 'react'
import {View , ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { Text } from 'react-native-svg';
import AppStack from './AppStack';
const Stack = createNativeStackNavigator();
export default function AppNav() {
  const  {isLoading, userToken} = useContext(AuthContext)
  if(isLoading){
   <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
    <ActivityIndicator size={'large'}/>
   </View>   
  }
  return (
   
    <NavigationContainer>
      <AuthStack/>    
  </NavigationContainer>
  )
}