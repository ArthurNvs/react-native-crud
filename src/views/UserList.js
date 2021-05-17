import { getActionFromState } from '@react-navigation/core'
import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import users from '../data/users'

export default  props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Confirmar exclusão do usuário?', [
            { text: 'Sim',
            onPress(){
                console.warn('delete: ' + user.name)
            }},
            { text: 'Não'}
        ])
    }

    function getUserItem({ item }) {
        return (
            <ListItem 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', item)}>
                <Avatar title={item.name} source={{uri: item.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{item.name} </ListItem.Title>
                    <ListItem.Title>{item.email} </ListItem.Title>
                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', item)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(item)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={ user => user.id .toString()} 
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}