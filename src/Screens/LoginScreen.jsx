import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import logo from '../../assets/logo.png';
import { validateEmail } from '../utils/EmailValidation';
import AlertModel from '../component/AlertModel/AlertModel';
const { width } = Dimensions.get('window');

const LoginScreen = () => {
  const [formValues, setFormValues] = useState({
    email:'',
    password:'',
  });
  const [validate,setValidate] = useState(true);
  const [isAlertVisible,setIsAlertVisible] = useState(false)
  const handleLogin = () => {
    if(!validateEmail(formValues.email)){
      setValidate(false)
      setIsAlertVisible(!isAlertVisible)
     //  alert('please enter a valid email')
       return;
     }
     setValidate(true)
     setIsAlertVisible(false);
     console.log(formValues)
  };
  const closeModal = () => {
    setIsAlertVisible(false);
  };
  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.inputContainer}>
        <TextInput
          style={!validate ? styles.validateInput:styles.input }
          placeholder="Email"
          onChangeText={(text) => handleInputChange('email',text)}
          value={formValues.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => handleInputChange('password',text)}
          value={formValues.password}
        />
        {validate? '':<AlertModel text={'Please Enter a valid Email !'} closeModal={closeModal} isAlertVisible={isAlertVisible}/>}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
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
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  registerButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    borderRadius: 5,
  },
  registerButtonText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '700',
  },
  validateInput:{
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: 150,
    height: 150,
    // marginBottom: 20,
  },
});

export default LoginScreen;
