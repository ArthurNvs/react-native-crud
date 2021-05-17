import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default  ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return(
        <View>
            <Text style={style.form}>Nome: </Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text style={style.form}>Email: </Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o email"
                value={user.email}
            />
            <Text style={style.form}>URL Avatar: </Text>
            <TextInput 
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a url do avatar"
                value={user.avatarUrl}
            />

            <Button 
                title="Salvar" 
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 10,
        marginLeft:10,
        marginRight: 10
    },

    form: {
        padding: 12,
    }
})