import React from 'react';
import { View, Text ,Button} from 'react-native';
import ProductCard from '../component/ProductCard'
import { useNavigation } from '@react-navigation/native';
import HorizontalFlatList from '../component/HorizontalItemList/ListItem';
function HomeScreen() {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

    return (
      <View style={{ flex: 1,backgroundColor:'white',alignItems:'center' }}>
        <HorizontalFlatList/>
       <View style={{width:'50%', height:'70%'}}>
       <ProductCard />
       </View>
      </View>
    );
  }
 export default HomeScreen;