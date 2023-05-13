import React, { useState } from 'react';
import { View,Text, TextInput, Button,StyleSheet  } from 'react-native';
import Modal from 'react-native-modal';
const AlertModel = ({isAlertVisible,closeModal,text}) => {
  return (
    <Modal isVisible={isAlertVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{text}</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
  )
}

export default AlertModel

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 17,
    marginBottom: 10,
    textAlign: 'center',
  },

    
})