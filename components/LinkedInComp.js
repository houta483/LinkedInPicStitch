import React from 'react';
import { View, Image } from 'react-native';
import LinkedInModal from 'react-native-linkedin';
import CustomButton from './Button';
import config from '../config';
import * as SecureStore from 'expo-secure-store';


function LinkedInComp ({ onPress, goToContactsPage, customSuccess }) {
  
  const { clientID, clientSecret } = config

  return(
    <View>
      <Image
        source={require('../images/LinkedIn.png')}
      />

      <LinkedInModal
        clientID={clientID}
        clientSecret={clientSecret}
        redirectUri="https://www.google.co.in/"
        onSuccess={token => customSuccess(token)}
        permissions={['r_liteprofile']}
      />

      <CustomButton 
        clickButton={onPress}
        text={"Check State.AccessToken"}
      />

      <CustomButton 
        clickButton={goToContactsPage}
        text={"Change Page"}
      />

  </View>
  )
}

export default LinkedInComp