import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Open Drawer" onPress={openDrawer} />
    </View>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* Add more screens here */}
      </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default App;
