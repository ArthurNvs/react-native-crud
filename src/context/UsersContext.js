import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { users }
const UsersContext = createContext({})

export const UsersProvider = props => {


    function reducer(state, action) {
        console.warn(action)
        return state
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