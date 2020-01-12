import { useSelector } from 'react-redux'
import { State } from './types'


export const updateActivities = ()=>{
    return useSelector((state: {
        activity: State
    })=> [...state.activity.listActivities.values()])
}