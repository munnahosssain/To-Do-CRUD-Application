import SignUp from './Src/Screen/SignUp';
import Home from './Src/Screen/Home';
import SignIn from './Src/Screen/SignIn';
import Edit from './Src/Screen/Edit';
import Create from './Src/Screen/Create';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#fff'
    }
}

const Stack = createNativeStackNavigator();

export default function App() {
    const auth = getAuth();

    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(null);

    // useEffect(() => {
    //     signOut(auth);
    // }, []);

    useEffect(() => {
        const authSubscription = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
            else {
                setUser(null);
                setLoading(false);
            }
        })
        return authSubscription;
    }, [])

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="blue" size=" large" />
            </View>
        )
    }

    return (
        <NavigationContainer theme={AppTheme}>
            <Stack.Navigator>
                {
                    user ? (
                        <>
                            <Stack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="Edit" component={Edit} />
                            <Stack.Screen name="Create" component={Create} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                name="SignIn"
                                component={SignIn}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="SignUp" component={SignUp} />
                        </>
                    )
                }
            </Stack.Navigator>
            <StatusBar style="dark" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
