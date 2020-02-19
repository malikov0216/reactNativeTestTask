import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Button, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Question } from '../components/Question'
import { QuestionScreen } from '../screens/QuestionScreen'

export const QuestionList = ({name}) => {
    const [questionList, setQuestionList] = useState([])
    const [url, setUrl] = useState(null)
    
    let content = (
        <SafeAreaView style={styles.main}>
            <Text style={styles.textGreating}>Привет, {name}</Text>
            <Text style={styles.text}>Список вопросов</Text>
            <FlatList 
                data={questionList}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <Question title={item.title} url={item.url} onOpen={setUrl}/>
                )}
            />
        </SafeAreaView>
    )

    if(url) {
        content = (
            <QuestionScreen url={url} onPress={setUrl}/>
        )
    }

    async function fetchUrl() {
        let key = 1
        try {
            const response = await fetch('https://api.myjson.com/bins/8561o');
            const json = await response.json();
            json.sort(function (a, b) {
                return ('' + a.url).localeCompare(b.url);
            })
            json.map(item => {
                ++key
                item.key = key.toString()
            })
            setQuestionList(json);
        } catch(e){
            console.log(e)
        }
      }

    useEffect(() => {
        fetchUrl()
    }, [])
    return (
        <View style={styles.main}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    },
    textGreating: {
        fontSize: 35,
        textAlign: 'center'
    }
})