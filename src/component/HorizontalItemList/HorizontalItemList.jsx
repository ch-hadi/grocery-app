import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const HorizontalItemList = () => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Hammad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  item: {
    width: 60,
    // height: 20,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorizontalItemList;
