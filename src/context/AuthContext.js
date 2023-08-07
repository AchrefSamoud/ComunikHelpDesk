import { View, Text } from 'react-native'
import React, {createContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from '../config';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(false);
    const [userToken, setUserToken]=useState(null);
    const [userInfo, setUserInfo]=useState(null);
    const login = (username,password) => {
      setIsLoading(true);
      axios.post('https://demohelpdesk.comunikcrm.info:4443/HelpDesk/index.php/api/login',{
        username,
        password
      }).then(res => {
        console.log(username,password);
        let userData=res.data;
        console.log("token",res.data.data.token);
        setUserInfo(userData);
        setUserToken(userData.data.token);
        AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken',JSON.stringify(userToken)); 
      })
      .catch(e => {
        console.log('login error',e);

      });
      AsyncStorage.setItem('userToken','ddeefef')
      setIsLoading(false);
    }
    const logout = () => {
      setIsLoading(true);
      setUserToken(null);
      AsyncStorage.removeItem('userToken');
      AsyncStorage.removeItem('userInfo');
      setIsLoading(true);
    }

    const isLoggedIn = async () => {
     try{
       let userToken = await AsyncStorage.getItem('userToken');
       let userInfo = await AsyncStorage.getItem('userInfo');
       userInfo=JSON.parse(userInfo);
       if(userInfo){
        setUserToken(userToken);
        setUserInfo(userInfo);
       }

       setUserToken(userToken);
       setIsLoading(false);
     }catch(e){
    console.log('isLoggedIn error',e)

     }
    }
    useEffect(()=>{
      isLoggedIn();
    },[])
  return (
    <AuthContext.Provider value={{login, logout}}>
        {children}
    </AuthContext.Provider>
    );
}