import { View, Text, SafeAreaView , ScrollView,TextInput, ImageBackground} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <ScrollView style={{padding:20}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginBottom: 20,
        }}>
        
        <Text style={{
          fontSize:16, fontFamily:'Roboto-Medium'
        }}>Hello Achref Samoud</Text>
        <ImageBackground
        source={require('../assets/images/user-profile.jpg')}
        style={{width:35, height:35}}
        imageStyle={{borderRadius:25}}
        />
        </View> 
        <View style={{
          flexDirection:'row' ,
          borderColor:'#C6C6C6',
           borderWidth:1,
            borderRadius:8, 
            paddingHorizontal:10,
            paddingVertical:8}}>
          <Feather name="search" size={20} color="#C6C6C6" style={{marginBottom:5}}/> 
          <TextInput placeholder='search'>

          </TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}