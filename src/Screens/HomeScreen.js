import React,{useEffect}from 'react';
import { View, Text ,Button} from 'react-native';
import ProductCard from '../component/ProductCard'
import { useNavigation } from '@react-navigation/native';
import HorizontalFlatList from '../component/HorizontalItemList/ListItem';
import { useDispatch,useSelector } from 'react-redux';
import { GetProducts } from '../features/productSlice';
function HomeScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productSlice.products);
  const category = useSelector((state)=>state.productSlice.category)
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  useEffect(() => {
      dispatch(GetProducts())
  }, [])

    return (
      <View style={{ flex: 1,backgroundColor:'white',alignItems:'center' }}>
        <HorizontalFlatList data={category} />
       <View style={{width:'50%', height:'70%'}}>
       <ProductCard />
       </View>
      </View>
    );
  }
 export default HomeScreen;