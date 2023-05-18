import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
const HorizontalFlatList = ({ data }) => {
  const [active, setActive] = useState(0);
  const flatListRef = useRef(null);

  const handleScrollLeft = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  const handleScrollRight = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={[
          styles.item,
          { 
            backgroundColor: active == index ? "red" : "pink",        
        },
        ]}
        onPress={() => setActive(index)}
      >
        <Text style={[styles.title,{color:index==active? 'white':'black'}]}>{active == index ? item : "ico"}</Text>
      </TouchableOpacity>
    );
  };

  console.log(active);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.scrollButton} onPress={handleScrollLeft}>
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.scrollButton} onPress={handleScrollRight}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContent: {
    paddingHorizontal: 0,
  },
  item: {
    width: 90,
    height: 30,
    overflow: "hidden",
    borderRadius: 8,
    // backgroundColor: 'lightblue',
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    padding: 2,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  scrollButton: {
    paddingHorizontal: 10,
  },
});

export default HorizontalFlatList;
