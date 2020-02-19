import React, { useEffect, useState } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import VKLogin from 'react-native-vkontakte-login/lib/index'

export const AuthScreen = ({onAuth, onChangeName}) => {
    // const [auth, setAuth] = useState(null)

    const onLogin = async () => {
        let permissions = 'friends email'
        permissions = permissions.trim().split(/[ ,]+/);
        try {
            const vkAuthResp = await VKLogin.login(['friends', 'photos', 'email']);
            let profile = await onRequest(vkAuthResp)
            onChangeName(profile.first_name)
            onAuth(true)
        } catch (e) {
            console.log(e)
        }
    }

    const onRequest = async (vkAuthResp) => {
        const {user_id, access_token} = vkAuthResp
        const reqUrl = `https://api.vk.com/method/account.getProfileInfo?user_id=${user_id}&access_token=${access_token}&v=5.84`
        try {
            const response = await fetch(reqUrl, {method: 'POST'});
            const data = await response.json();
            if (data.error) {
              console.log('Request vk error: ', data.error)
            } else {
              return data.response
            }
          } catch (error) {
            console.log('Request vk error: ', error)
          }
    }

    useEffect(() => {
        VKLogin.initialize(7326891)
    }, [])

    return (
        <View style={styles.auth}>
            <Text style={styles.text}>Авторизация</Text>
            <View>
                {/* <Button title='Войти' onPress={() => auth(true)}/> */}
                <Button title='Войти' onPress={() => onLogin()}/>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    auth: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    vkStatus: {
        fontSize: 20
    }
})