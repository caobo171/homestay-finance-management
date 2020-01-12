import { ActionType, createReducer, action} from 'typesafe-actions'

import * as actions from './actions'
import { State } from './types'

const initialState: State = {
    listActivities: new Map()
}

export default createReducer<State, ActionType<typeof actions>>(initialState)
.handleAction(actions.addActivity,(state,  action)=> {
    const newList = state.listActivities.set(action.payload.id as string,action.payload)
    return {listActivities: newList} 
})
.handleAction(actions.editActivity,(state, action)=>{
    const newList = state.listActivities.set(action.payload.id as string,action.payload)
    return {listActivities: newList} 
})
.handleAction(actions.getActivities,(state, action)=>{
    const newList = action.payload
    return {listActivities: new Map([...state.listActivities,...newList])} 
})
.handleAction(actions.deleteActivity,(state, action)=>{
    const newList = new Map(state.listActivities)
    newList.delete(action.payload.id as string)
    return {listActivities: newList} 
})