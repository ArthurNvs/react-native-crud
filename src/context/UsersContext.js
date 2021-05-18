import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({})

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = ~~Math.random()
            return {
                ...state,
                users: [...state.users, user],
            }
    },

    updateUser(state, action) {
        const updatedUser = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === updatedUser.id ? updatedUser : u)
        }
    },

    deleteUser(state, action) {
        const user = action.payload
            return {
                //caso tenha mais de um elemento no estado declarar dessa forma, para não sobrescrever todo o estado
                //...state,
                users: state.users.filter(u => u.id !== user.id)
                //como só temos o user, podemos declarar apenas ele no estado
            }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        //checa se há função, senão retorna o mesmo estado 
        return fn ? fn(state, action) : state
    }

    //initialState será passado para reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext

//Dentro de App.js esse componente irá envolver toda a aplicação
//Com isso dentro de props.children estará a aplicação
//Estará disponível para props.children qualquer valor (ex: objeto com a lista de users mocada)