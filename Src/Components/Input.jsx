import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function Input({ placeholder, secureTextEntry, onChangeText }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})