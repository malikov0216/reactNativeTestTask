import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button, SafeAreaView } from 'react-native'

export const QuestionScreen = ({ url, onPress }) => {
    const [item, setItem] = useState('')

    async function fetchUrl() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            json.answers.sort(function (a, b) {
                return ('' + a.number).localeCompare(b.number);
            })
            setItem(json);
        } catch(e){
            console.log(e)
        }
      }
      useEffect(() => {
        fetchUrl()
      }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>{item.question}</Text>
                <Text style={styles.answerHead}>Ответы</Text>
                <FlatList 
                    data={item.answers}
                    keyExtractor={element => element.number.toString()}
                    renderItem={({item}) => {
                        return (
                            <Text style={styles.answerTitle}>{item.number} {item.answer}</Text>
                        )
                    }
                    }
                />
            </View>
            <View>
                <Button title='Назад' onPress={() => onPress(null)}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    answerHead: {
        fontSize: 25,
        // fontWeight: '300',
        textAlign: 'left',
        marginTop: 20
    },
    answerTitle: {
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