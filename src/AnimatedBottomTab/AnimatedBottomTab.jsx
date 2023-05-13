import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';

const AnimatedBottomTab = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [translationValue, setTranslationValue] = useState(new Animated.Value(0));
  
    const onTabPress = (index) => {
      setSelectedIndex(index);
      Animated.spring(translationValue, {
        toValue: index,
        useNativeDriver: true,
      }).start();
    };
  
    const getTabBarIcon = (index) => {
      // Return the appropriate icon based on the selected index
    };
  
    const tabItems = [
      {
        label: 'Home',
        icon: getTabBarIcon(0),
      },
      {
        label: 'Search',
        icon: getTabBarIcon(1),
      },
      {
        label: 'Profile',
        icon: getTabBarIcon(2),
      },
    ];
  
    const tabBarWidth = 300;
    const tabBarItemWidth = tabBarWidth / tabItems.length;
  
    return (
      <View style={styles.container}>
        {tabItems.map((item, index) => (
          <TouchableOpacity
            key={item.label}
            style={styles.tabBarItem}
            onPress={() => onTabPress(index)}
          >
            {item.icon}
            <Text style={[styles.tabBarLabel, selectedIndex === index && styles.selectedTabLabel]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
        <Animated.View
          style={[
            styles.tabBarIndicator,
            {
              width: tabBarItemWidth - 20,
              transform: [{ translateX: translationValue.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [0, tabBarItemWidth, tabBarItemWidth * 2],
              }) }],
            },
          ]}
        />
      </View>
    );
  };
  
  export default AnimatedBottomTab;
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 300,
      height: 56,
      backgroundColor: 'white',
      borderRadius: 16,
      paddingHorizontal: 10,
      // marginBottom: 16,
    },
    tabBarItem: {
      alignItems: 'center',
      justifyContent:'center',
      display:'flex'
    },
    tabBarLabel: {
      fontSize: 12,
      marginTop: 4,
    },
    selectedTabLabel: {
      fontWeight: 'bold',
    },
    tabBarIndicator: {
      position: 'absolute',
      bottom: 0,
      left: 0,//
      height: 4,
      borderRadius: 2,
      backgroundColor: '#2a82c7',
    },
  });
  