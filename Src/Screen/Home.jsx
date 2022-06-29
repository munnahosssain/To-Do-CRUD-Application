import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    marginHorizontal:5,
    alignItems: 'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 18,
  },
});