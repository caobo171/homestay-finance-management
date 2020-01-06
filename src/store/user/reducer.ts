import { ActionType, createReducer  } from 'typesafe-actions'

import * as actions from './action'

import { State } from "./types";

const initialState = {
    currentUser : null,
    listUser: new Map()
}

export default createReducer<State, ActionType<typeof actions>>(initialState)
.handleAction(actions.login,(state,action)=>({
    ...state,
    currentUser: action.payload
}))
.handleAction(actions.getAllUsers, (state, action) => ({
    ...state,
    listUser: action.payload
}))

.handleAction(actions.updateUser, (state, action) => {

    const newList = state.listUser.set(action.payload.id, action.payload)
    return {
        ...state,
        listUser: newList
    }
})