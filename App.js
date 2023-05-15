import React,{useState,useEffect} from 'react';
import { View,Text } from 'react-native';
import CustomBottomTab from './src/CustomBottomTab/CustomBottomTab';
import NavBar from './src/NavBar/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import HorizontalItemList from './src/component/HorizontalItemList/HorizontalItemList';
import HorizontalFlatList from './src/component/HorizontalItemList/ListItem';
export default function App() {

  useEffect(()=>{
    // localStorage.setItem('tk','zubaidaRiaz')
  },[])
  return (
   <NavigationContainer>
     <View style={{flex:1,backgroundColor:'transparent'}}>
      <View style={{marginTop:'10%'}}>
        <NavBar/>
      </View>
      <CustomBottomTab/>
      {/* <LoginScreen/>
     <SignupScreen/> */}
    </View>
   </NavigationContainer>
  );
}
