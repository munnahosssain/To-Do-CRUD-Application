import SignUp from './Src/Screen/SignUp';
import Home from './Src/Screen/Home';
import SignIn from './Src/Screen/SignIn';
import Edit from './Src/Screen/Edit';
import Create from './Src/Screen/Create';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNHbw8Z9ZFt4stkxcbi1d74gYk-eQirP0",
  authDomain: "todo-naive-app.firebaseapp.com",
  projectId: "todo-naive-app",
  storageBucket: "todo-naive-app.appspot.com",
  messagingSenderId: "779137282723",
  appId: "1:779137282723:web:645977bdd7ef20e96cc516"
};

const app = initializeApp(firebaseConfig);


const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false;
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
              <Stack.Screen name="Home" component={Home} />
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
});
