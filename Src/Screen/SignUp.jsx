import Button from '../Components/Button';
import Input from '../Components/Input';
import { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth();

const genderOption = ['Male', 'Female'];

export default function SignUp({ navigation }) {

  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const singUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('User Created', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 15, flex: 1 }}>
        <Input
          placeholder="Email address"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Full Name"
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
        />
        <View>
          <Text style={{ marginVertical: 20, fontSize: 16 }}>Select Gender</Text>
        </View>
        {
          genderOption.map((option) => {
            const selected = option === gender;
            return (
              <Pressable key={option}
                style={styles.radioContainer}
                onPress={() => setGender(option)}
              >
                <View
                  style={[
                    styles.outerCircle,
                    selected && styles.selectedOuterCircle
                  ]}
                >
                  <View
                    style={[
                      styles.innerCircle,
                      selected && styles.selectedInnerCircle
                    ]}
                  />
                </View>
                <Text style={styles.radioText}>{option}</Text>
              </Pressable>
            )
          })
        }
        <View style={styles.forget}>
          <Button
            onPress={singUp}
            title={'Sign Up'}
            customStyles={styles.overWriteButton} />
          <Pressable
            onPress={() => { navigation.navigate("SignIn") }}
          >
            <Text>Already have an account? <Text style={{ color: 'green', fontWeight: 'bold' }}>Log In</Text></Text>
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

  radioContainer: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  outerCircle: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#cfcfcf'
  },

  innerCircle: {
    width: 15,
    height: 15,
    // borderWidth: 1,
    borderRadius: 8,
    borderColor: '#cfcfcf'
  },

  selectedOuterCircle: {
    borerColor: 'orange',
  },

  selectedInnerCircle: {
    borerColor: 'orange',
    backgroundColor: 'orange',
  },

  forget: {
    flex: 1,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  overWriteButton: {
    marginBottom: 60,
    alignSelf: 'center'
  },

  radioText: {
    marginLeft: 10,
  },


})