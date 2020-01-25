import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import LinkedInComp from './LinkedInComp'
import OtherPage from './OtherPage'

class LinkedIn extends React.Component {
  constructor(props) {
    super(props)
    
    
    this.state = {
      accessToken: null,
      getContactsPage: false,
    }
    
    this.onPress = this.onPress.bind(this);
    this.togglePage = this.togglePage.bind(this);
  }


  onPress = () => {
    console.log(this.state.accessToken)
  }

  togglePage = () => {
    this.setState((state) => ({getContactsPage: !state.getContactsPage}))
  }

  

  render() {

    if (false) {
      return(
        <View>
          <LinkedInComp
            onPress={this.onPress}
            goToContactsPage={this.togglePage}
            customSuccess={token =>
              this.state.accessToken === null 
                ? this.setState({accessToken: token.access_token})
                : console.log(this.state.accessToken)}
          />
        </View>
      )
    }
    
    else if (true) {
      return(
        <View>
          <OtherPage 
            buttonFunction={this.togglePage}
            buttonText={"Return to Home Page"}
          />
        </View>
      )
    }
  }
}

export default LinkedIn

