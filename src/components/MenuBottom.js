import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const MenuBottom = () => {
    return (
        <View style={styles.menuBottom}>
            <View style={styles.fistMenu}>
                <Text style={styles.text}>Список вопросов</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuBottom: {
        justifyContent: 'center',
        backgroundColor: 'aqua',
        height: 55,
        width: '100%'
    },
    fistMenu: {
        width: '50%'
    },
    text: {
        fontSize: 20,
    }
})