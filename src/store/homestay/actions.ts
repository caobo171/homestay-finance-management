import { action, createAction } from "typesafe-actions"
import  HomeStay from "./types"



export const addHomeStay = createAction('HomeStay/add' , 
(homeStay: HomeStay)=> (homeStay))<HomeStay>()

export const deleteHomeStay = createAction('HomeStay/delete' , 
(homeStay: HomeStay)=> (homeStay))<HomeStay>()

export const editHomeStay = createAction('HomeStay/edit',
(homeStay: HomeStay)=>(homeStay))<HomeStay>()


export const getHomeStays = createAction('HomeStay/list',
(homeStays: Map<string, HomeStay>)=>(homeStays))<Map<string, HomeStay>>()