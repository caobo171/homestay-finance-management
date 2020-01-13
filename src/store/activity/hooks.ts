import { useSelector } from 'react-redux'
import { State } from './types'


export const useActivities = ()=>{
    return useSelector((state: {
        activity: State
    })=> [...state.activity.listActivities.values()])
}


export const useActivitiesByUserId = (userId: string)=>{
    return useSelector((state: {
        activity: State
    })=> [...state.activity.listActivities.values()].filter(act => act.user_id===userId || act.influencers.indexOf(userId)>-1).sort((a,b)=> b.time-a.time))
}


export const useActivitiesByItemId = (itemId: string) => {
    return useSelector((state: {
        activity: State
    })=> [...state.activity.listActivities.values()].filter(act => act.item_id === itemId).sort((a,b)=> b.time-a.time))
}