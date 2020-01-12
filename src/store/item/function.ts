import firebase  from 'firebase'
import Item from './types'
import store from 'store/store'
import * as actions from './actions'
import { Activity } from 'store/activity/types'


export const ITEM_COLLECTION = 'items'

export const addItem = async (item: Item, storex = store)=>{
    const {id , ...rest} = item 
    const res = await firebase.firestore().collection(ITEM_COLLECTION)
    .add(rest)

    return res.id
}

export const updateItems = async(items: Map<string, Item>, storex= store)=>{
    return storex.dispatch(actions.getItems(items))
}