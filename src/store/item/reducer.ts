import { ActionType, createReducer, action} from 'typesafe-actions'

import * as actions from './actions'
import { State } from './types'

const initialState: State = {
    listItems: new Map()
}

export default createReducer<State, ActionType<typeof actions>>(initialState)
.handleAction(actions.addItem,(state,  action)=> {
    const newList = state.listItems.set(action.payload.id as string,action.payload)
    return {listItems: newList} 
})
.handleAction(actions.editItem,(state, action)=>{
    const newList = state.listItems.set(action.payload.id as string,action.payload)
    return {listItems: newList} 
})
.handleAction(actions.getItems,(state, action)=>{
    const newList = action.payload
    return {listItems: new Map([...newList,...state.listItems])} 
})
.handleAction(actions.deleteItem,(state, action)=>{
    const newList = new Map(state.listItems)
    newList.delete(action.payload.id as string)
    return {listItems: newList} 
})