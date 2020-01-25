import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinkedIn from './components/LinkedIn.js'

export default function App() {
  return (
    <View style={styles.container}>
      <LinkedIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
