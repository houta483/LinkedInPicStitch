import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function CustomButton ({ clickButton, text }) {
  return(
    <View>
      <TouchableOpacity
        onPress={clickButton}
        style={styles.button}
      >
        <Text> { text } </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
})

export default CustomButton