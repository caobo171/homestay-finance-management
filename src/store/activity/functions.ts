import * as firebase from 'firebase'
import * as actions from './actions'
import store from 'store/store'
import { Activity } from './types'


export const ACTIVITY_COLLECTION = 'activities'

export const updateActivities = (activities: Map<string, Activity>, storex= store)=>{
    return storex.dispatch(actions.getActivities(activities))
}

export const addActivity = async (activity: Activity)=>{
    const {id , ...rest} = activity 
    const res = await firebase.firestore().collection(ACTIVITY_COLLECTION)
    .add(rest)
    return res.id
}