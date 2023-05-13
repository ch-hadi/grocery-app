import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { validateEmail } from "../utils/EmailValidation";
import logo from "../../assets/logo.png";
const { width } = Dimensions.get("window");
import AlertModel from '../component/AlertModel/AlertModel'
const SignupScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [validate,setValidate] = useState(true);
  const [isAlertVisible,setIsAlertVisible] = useState(false)
  const [formValues, setFormValues] = useState({
    fullName:'',
    userName:'',
    email:'',
    password:'',
    conformPassword:''
  });
  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSignup = () => {
    if(!validateEmail(formValues.email)){
     setValidate(false)
     setIsAlertVisible(!isAlertVisible)
    //  alert('please enter a valid email')
      return;
    }
    setValidate(true)
    setIsAlertVisible(false);

    console.log('Form Values', JSON.stringify(formValues));
    // Implement your sign-up logic here
    // console.log("Signing up with:", email, password);
  };

  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  
  console.log(validate)
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
    <KeyboardAvoidingView style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.inputContainer}>
        {/* <View>
        <TextInput
            style={styles.Minput}
            placeholder="Email"
        />
        <Icon name="envelope" size={20} style={styles.icon} />
        </View> */}
         <TextInput
          style={styles.input}
          placeholder="Full Name"
          //   secureTextEntry
          onChangeText={(text) => handleInputChange('fullName',text)}
          value={formValues.fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => handleInputChange('userName',text)}
          value={formValues.userName}
        />
        <TextInput
          // style={styles.input}
          style={!validate ? styles.validateInput:styles.input }
          placeholder="Email"
          //   secureTextEntry
          onChangeText={(text) => handleInputChange('email',text)}
          value={formValues.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => handleInputChange('password',text)}
          value={formValues.password}
        />
        <TextInput
          style={[styles.input, { marginBottom: keyboardOffset }]}
          placeholder="Conform Password"
          secureTextEntry
          onChangeText={(text) => handleInputChange('conformPassword',text)}
          value={formValues.conformPassword}
        />
        {validate? '':<AlertModel text={'Please Enter a valid Email !'} closeModal={closeModal} isAlertVisible={isAlertVisible}/>}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
  inputContainer: {
    width: width * 0.8,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  validateInput:{
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  signupButton: {
    backgroundColor: "#2ECC71",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  signupButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
  },
  loginButton: {
    backgroundColor: "#CCCCCC",
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "700",
  },
  Minput: {
    height: 40,
    // borderWidth: 1,
    backgroundColor: "#CCCCCC",
    paddingLeft: 40, // Adjust this value to leave space for the icon
    borderRadius: 10,
  },
  icon: {
    position: "absolute",
    left: 10, // Adjust this value to position the icon correctly
    top: 10, // Adjust this value to position the icon correctly
  },
  logo: {
    width: 150,
    height: 150,
    // marginBottom: 20,
  },
});

export default SignupScreen;
