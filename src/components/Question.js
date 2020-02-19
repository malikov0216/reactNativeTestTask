import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export function Question({ title, url, onOpen }) {
    
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                if(url) {
                    onOpen(url)
                }
            }}
        >
            <View style={styles.question}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
        
    )
} 

const styles = StyleSheet.create({
    question: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "darkgrey",
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 10
    }
})