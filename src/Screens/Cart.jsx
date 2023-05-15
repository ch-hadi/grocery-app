import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.main}>
      <Text>Cart</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }

})