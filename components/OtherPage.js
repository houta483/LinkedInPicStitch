import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import CustomButton from './Button'
import * as Contacts from 'expo-contacts';
import * as SecureStore from 'expo-secure-store';

function OtherPage ({ buttonFunction, buttonText }) {
  const state = {
    contacts: [],
    names: {},
    count: 0
  }
  
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          // console.log(data[0].name) // "Kate Bell"
          state.contacts = data
        }
        // console.log('contacts ' + state.contacts[0].name)
        // for (let i = 0; i < state.contacts.length; i++) {
        //   SecureStore.setItemAsync(`keyNumber${i}`, state.contacts[i].name)
        // }
      }
    })();
  }, []);

    const checkForNameByIndex = () => {
      // SecureStore.getItemAsync(`keyNumber${index}`).then(data => console.log(data))
      if (state.count < 1) {
        for (let i = 0; i < state.contacts.length; i++) {
          state.names[state.contacts[i].name] = (state.contacts[i].imageAvailable)
        }
        console.log(state.names)
        state.count++
      }

      console.log(state.names)
    }

    const filterContactsWithoutPicture = () => {
      Object.values(state.names)
      // let result = Object.values(state.names).filter(bool => )
      console.log(result)
    }

    const clearState = () => {
      state.contacts = []
      state.names = []
      state.count = 0

      console.log(state.contacts)
      console.log(state.names)
      console.log(state.count)
    }
    

  return(
    <View> 
      <View >
        <Image
          source={require('../images/LinkedIn.png')}
        />
      </View>
      
      <View style={styles.body}>

        <CustomButton
          clickButton={() => checkForNameByIndex(2)}
          text={'Load Names to State'}
        />

        <CustomButton
          clickButton={buttonFunction}
          text={buttonText}
        />

        <CustomButton
          clickButton={clearState}
          text={"Clear State"}
        />

        <CustomButton
          clickButton={filterContactsWithoutPicture}
          text={"Filter"}
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