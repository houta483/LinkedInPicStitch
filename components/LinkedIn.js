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
      linkedInId: '',
    }
    
    this.onPress = this.onPress.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.fetchID = this.fetchID.bind(this);
    this.fetchConnections = this.fetchConnections.bind(this);
  }


  onPress = () => {
    console.log(this.state.accessToken)
  }

  togglePage = () => {
    this.setState((state) => ({getContactsPage: !state.getContactsPage}))
  }

  fetchID = () => {
    fetch(`https://api.linkedin.com/v2/me`, {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${this.state.accessToken}`
      },
    })
      .then(response => response.json())
      .then(data => this.setState((state) => ({
        access_token: state.accessToken,
        getContactsPage: state.getContactsPage,
        linkedInId: data.id
      })))
    }



    fetchConnections = () => {
      // need to get permission from the linkedin API. I submitted request and am just waiting to hear back
      fetch(`https://api.linkedin.com/v2/connections?q=viewer&start=0&count=50`, {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${this.state.accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
    }
    
    render() {
      console.log('this.state.linkedInId: ' + this.state.linkedInId)

    if (this.state.getContactsPage === false) {
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
          <View>
            <TouchableOpacity
              onPress={this.fetchID}
            >
              <Text> Fetch </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={this.fetchConnections}
            >
              <Text> Test API Calls </Text>
            </TouchableOpacity>
          </View>

        </View>
      )
    }
    
    else if (this.state.getContactsPage === true) {
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

// const styles = StyleSheet.create({
//   image: {
//     flex: .2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // borderColor: 'red',
//     // borderWidth: 1,
//   },
//   body: {
//     flex: .5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // borderColor: 'red',
//     // borderWidth: 1,
//   }
// })

export default LinkedIn

