import React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import CustomBottomTab from './src/CustomBottomTab/CustomBottomTab';
import NavBar from './src/NavBar/NavBar';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignUpScreen';
import AnimatedBottomTab from './src/AnimatedBottomTab/AnimatedBottomTab'
export default function App() {

  useEffect(()=>{
    // localStorage.setItem('tk','zubaidaRiaz')
  },[])
  return (
    <View style={{flex:1,backgroundColor:'transparent'}}>
      <View style={{marginTop:'10%'}}>
        <NavBar/>
      </View>
      <CustomBottomTab/>
      {/* <LoginScreen/>
     <SignupScreen/> */}
    </View>
  );
}
