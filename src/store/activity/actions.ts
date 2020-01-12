import { action, createAction } from "typesafe-actions"
import {Activity}   from "./types"



export const addActivity = createAction('activity/add' , 
(activity: Activity)=> (activity))<Activity>()

export const deleteActivity = createAction('activity/delete' , 
(activity: Activity)=> (activity))<Activity>()

export const editActivity = createAction('activity/edit',
(activity: Activity)=>(activity))<Activity>()


export const getActivities = createAction('activity/list',
(activities: Map<string, Activity>)=>(activities))<Map<string, Activity>>()