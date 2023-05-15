import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';
const NavBar = () => {
  const navigation = useNavigation();
  const handleCartPress = () => {
    // Handle cart icon press
  };

  const handleMenuPress = () => {
   navigation.navigate('Like')
    // Handle menu icon press
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={handleCartPress}>
      <Ionicons name={'menu'} size={34} color={'green'} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={handleMenuPress}>
      <Ionicons name={'cart-outline'} size={34} color={'green'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    height: 60,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default NavBar;
