import React , {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center', padding:80}}>
          <Image
          source={require('../assets/images/helpdesk.2c79390d.png')}
            
            style={{height:100,
            width:300}}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
          
        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
            
          />
          }
          value={email}
          onChangeText={text => {setEmail(text)}}
          keyboardType="email-address"
        />

<InputField
          label={'Password'}
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={text=>setPassword(text)}
        />
        
        <CustomButton label={"Login"} onPress={() => {login(email,password)}} />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 70,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 70,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <Text style={{padding:10}}>© 2023 powered by Comunik v2.20</Text>
            <Image source={require('../assets/images/comunik.3c5558bd.png')} style={{width:50, height:40}}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
