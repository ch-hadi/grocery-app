import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import CustomBottomTab from '../CustomBottomTab/CustomBottomTab';
import SignupScreen from '../Screens/SignUpScreen';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Routes = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const isLogin = useSelector((state) => state.userSlice.isSuccess);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setAuth(isLogin);
  }, [isLogin]);
  return (
    <View style={{ flex: 1 }}>
      {isLogin ? (
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View style={{ marginTop: '10%' }}>
            <NavBar />
          </View>
          <CustomBottomTab />
        </View>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='Signup'
            component={SignupScreen}
          />
        </Stack.Navigator>
      )}
    </View>
  );
};

export default Routes;
