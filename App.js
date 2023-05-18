import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CustomBottomTab from "./src/CustomBottomTab/CustomBottomTab";
import NavBar from "./src/NavBar/NavBar";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/store/store";
import { Provider } from "react-redux";
import SignUpScreen from './src/Screens/SignUpScreen'
import { useSelector } from "react-redux";
import Routes from "./src/Routs/Routs";
export default function App() {
return (
    <Provider store={store}>
      <NavigationContainer>
      <Routes/>
      </NavigationContainer>
    </Provider>
  );
}

