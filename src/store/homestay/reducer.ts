import { ActionType, createReducer, action} from 'typesafe-actions'

import * as actions from './actions'
import { State } from './types'

const initialState: State = {
    listHomeStay: new Map()
}

export default createReducer<State, ActionType<typeof actions>>(initialState)
.handleAction(actions.addHomeStay,(state,  action)=> {
    const newList = state.listHomeStay.set(action.payload.id as string,action.payload)
    return {listHomeStay: newList} 
})
.handleAction(actions.editHomeStay,(state, action)=>{
    const newList = state.listHomeStay.set(action.payload.id as string,action.payload)
    return {listHomeStay: newList} 
})
.handleAction(actions.getHomeStays,(state, action)=>{
    const newList = action.payload
    return {listHomeStay: new Map([...newList,...state.listHomeStay])} 
})
.handleAction(actions.deleteHomeStay,(state, action)=>{
    const newList = new Map(state.listHomeStay)
    newList.delete(action.payload.id as string)
    return {listHomeStay: newList} 
})