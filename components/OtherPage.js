import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CustomButton from './Button'
import * as Contacts from 'expo-contacts';

function OtherPage ({buttonFunction, buttonText}) {
  const state = {
    contacts: null,
    fullName: []
  }
  
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data;
          console.log(contact);
        }

        state.contacts = data
      }
    })();
  }, []);

  const loadContactsToState = () => {
    for (let i = 0; i < state.contacts.length; i++) {
      state.fullName.push([state.contacts[i].name, i])
    }
  }

  return(
    <View>
      <View style={styles.image}>
        <Image
          source={require('../images/LinkedIn.png')}
        />
      </View>
      
      <View style={styles.body}>
        <Text> 
           
        </Text>

        <TouchableOpacity 
          onPress={loadContactsToState}
        >
          <Text>Check State</Text>
        </TouchableOpacity>

        <CustomButton
          clickButton={buttonFunction}
          text={buttonText}
        />

        <CustomButton
          clickButton={() => console.log(state.contacts)}
          text={buttonText}
        />

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