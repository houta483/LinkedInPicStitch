import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import CustomButton from './Button'

function OtherPage ({buttonFunction, buttonText}) {
  return(
    <View>
      <View style={styles.image}>
        <Image
          source={require('../images/LinkedIn.png')}
        />
      </View>
      
      <View style={styles.body}>
        <Text> 
          Hello There 
        </Text>

        <CustomButton
          clickButton={buttonFunction}
          text={buttonText}
        >

        </CustomButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  body: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  }
})

export default OtherPage