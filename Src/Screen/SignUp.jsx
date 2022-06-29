import Button from '../Components/Button';
import Input from '../Components/Input';
import { auth, db } from '../../firebase.config';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
// const auth = getAuth();

const genderOption = ['Male', 'Female'];

export default function SignUp({ navigation }) {
    // const auth = getAuth();

    const [gender, setGender] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const singUp = async () => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            await addDoc(collection(db, "todos"), {
                name: name,
                email: email,
                age: age,
                gender: gender,
                uid: result.user.uid,
            })
            setLoading(false);
            console.log('result', result)
        }
        catch (error) {
            console.log("404", message.error);
            showMessage({
                message: "ERROR: ",
                type: "danger",
            });
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 15, flex: 1 }}>
                <Input
                    autoCapitalize={"none"}
                    placeholder="Email address"
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    autoCapitalize={"words"}
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
        fontWeight: 'bold'
    },


})