import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { validateEmail } from '../utils/EmailValidation';
import AlertModel from '../component/AlertModel/AlertModel';
const { width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [validate, setValidate] = useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const handleLogin = () => {
    if (!validateEmail(formValues.email)) {
      setValidate(false);
      setIsAlertVisible(!isAlertVisible);
      alert('please enter a valid email');
      return;
    }
    setValidate(true);
    setIsAlertVisible(false);
    console.log(formValues);
  };
  const handleRegister = () => {
    navigation.navigate('Signup');
  };
  const closeModal = () => {
    setIsAlertVisible(false);
  };
  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            // style={styles.input}
            style={!validate ? styles.validateInput : styles.input}
            placeholder='Email'
            //   secureTextEntry
            onChangeText={(text) => handleInputChange('email', text)}
            value={formValues.email}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Icon name='mail-outline' size={20} style={styles.icon} />
          <Icon name='remove-outline' size={20} style={styles.sicon} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            onChangeText={(text) => handleInputChange('password', text)}
            value={formValues.password}
          />
          <Icon name='lock-closed-outline' size={20} style={styles.icon} />
          <Icon name='remove-outline' size={20} style={styles.sicon} />
        </View>
        {/* {validate ? (
          ''
        ) : (
          <AlertModel
            text={'Please Enter a valid Email !'}
            closeModal={closeModal}
            isAlertVisible={isAlertVisible}
          />
        )} */}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    width: width * 0.8,
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: '#bdc3c7',
    fontSize: 13,
    color: 'green',
  },
  validateInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: '#bdc3c7',
    fontSize: 13,
    color: 'green',
  },
  loginButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '700',
  },
  registerButton: {
    marginVertical: 10,
    backgroundColor: '#2ECC71',
    paddingVertical: 10,
    borderRadius: 20,
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  logo: {
    width: 150,
    height: 150,
    // marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    left: 10, // Adjust this value to position the icon correctly
    top: 10, // Adjust this value to position the icon correctly
    color: 'green',
  },
  sicon: {
    position: 'absolute',
    left: 30, // Adjust this value to position the icon correctly
    top: 10, // Adjust this value to position the icon correctly
    color: 'green',
    transform: 'rotate(90deg)',
  },
});

export default LoginScreen;
