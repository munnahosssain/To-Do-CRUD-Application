import React from 'react';
import Button from '../Components/Button';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import Input from '../Components/Input';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: 'center' }}
        source={require('../../assets/login.png')}
      />
      <Text style={styles.message}>Never forget your notes</Text>
      <View style={{ marginHorizontal: 15, flex: 1 }}>
        <Input
          placeholder="Email address"
        />
        <Input
          secureTextEntry
          placeholder="Password"
        />
        <View style={styles.forget}>
          <Button title={'Login'} customStyles={styles.overWriteButton} />
          <Pressable onPress={() => { navigation.navigate("SignUp") }}>
            <Text>Don't have an account? <Text style={{ color: 'green', fontWeight: 'bold' }}>Sign Up</Text></Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },

  message: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  overWriteButton: {
    marginBottom: 60,
    alignSelf: 'center'
  },

  forget: {
    flex: 1,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
})