import React, { useState } from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ActivityIndicator } from 'react-native-web';
import { auth } from '../../firebase.config';

export default function SignIn({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigationToSingUp = () => {
    navigation.navigate('SignUp')
  }

  const SignUp = () => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log("Signed in Successful", res);
    })
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: 'center' }}
        source={require('../../assets/login.png')}
      />
      <Text style={styles.message}>Never forget your notes</Text>
      <View style={{ marginHorizontal: 15, flex: 1 }}>
        <Input
          autoCapitalize={"none"}
          placeholder="Email address"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        {
          error &&
          <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>
        }

        <View style={styles.forget}>
          {
            loading ? (
              <ActivityIndicator />
            ) : (
              <Button
                title='LogIn'
                customStyles={styles.overWriteButton}
                onPress={SignUp}
              />
            )
          }
          
          {/* <Button
            onPress={SignUp}
            title={'Login'}
            customStyles={styles.overWriteButton}
          /> */}
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