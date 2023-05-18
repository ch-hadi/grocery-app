import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { validateEmail } from '../utils/EmailValidation';
import logo from '../../assets/logo.png';
const { width } = Dimensions.get('window');
import AlertModel from '../component/AlertModel/AlertModel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../features/userSlice';
const SignupScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    conformPassword: '',
  });
  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignup = () => {
    if (!validateEmail(formValues.email)) {
      setValidate(false);
      //  setIsAlertVisible(!isAlertVisible)
      //  alert('please enter a valid email')
      return;
    }
    setValidate(true);
    setIsAlertVisible(false);
    dispatch(Login());
    console.log('Form Values', JSON.stringify(formValues));
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyboardDidShow = (event) => {
    const keyboardHeight = event.endCoordinates.height;
    setKeyboardOffset(keyboardHeight);
  };

  const keyboardDidHide = () => {
    setKeyboardOffset(0);
  };

  const closeModal = () => {
    setIsAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        {/* <View>
        <TextInput
            style={styles.Minput}
            placeholder="Email"
        />
        <Icon name="envelope" size={20} style={styles.icon} />
        </View> */}
        <View>
          <TextInput
            style={styles.input}
            placeholder='Full Name'
            //   secureTextEntry
            onChangeText={(text) => handleInputChange('fullName', text)}
            value={formValues.fullName}
          />
          <Icon name='pencil-outline' size={20} style={styles.icon} />
          <Icon name='remove-outline' size={20} style={styles.sicon} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Username'
            onChangeText={(text) => handleInputChange('userName', text)}
            value={formValues.userName}
          />
          <Icon name='person-outline' size={20} style={styles.icon} />
          <Icon name='remove-outline' size={20} style={styles.sicon} />
        </View>
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
        <View>
          <TextInput
            //  style={[styles.input, { marginBottom: keyboardOffset }]} => this is for keyboard avoiding ,past this in style and use main container keyboardAavoidingView
            style={styles.input}
            placeholder='Conform Password'
            secureTextEntry
            onChangeText={(text) => handleInputChange('conformPassword', text)}
            value={formValues.conformPassword}
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
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: '5%',
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
  signupButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 10,
    borderRadius: 20,
  },
  signupButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
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
  Minput: {
    height: 40,
    // borderWidth: 1,
    backgroundColor: '#CCCCCC',
    paddingLeft: 40, // Adjust this value to leave space for the icon
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: '#bdc3c7',
    fontSize: 13,
    color: 'green',
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
  logo: {
    width: 150,
    height: 150,
    // marginBottom: 20,
  },
});

export default SignupScreen;
