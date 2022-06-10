import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({ title, onPress, customStyles }) {
    return (
        <View >
            <TouchableOpacity onPress={onPress} style={[styles.button, customStyles]}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 65,
        width: 185,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFE600',
    },

    title: {
        fontSize: 16,
    }
})