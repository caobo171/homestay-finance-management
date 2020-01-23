import firebase  from 'firebase'
import Item, { ItemType } from './types'
import store from 'store/store'
import * as actions from './actions'
import { Activity } from 'store/activity/types'


export const ITEM_COLLECTION = 'items'

export const DEFAULT_ITEM_IMAGE = 'https://primerize.stanford.edu/site_media/images/fg_question.png'

export const FAKE_ITEM: Item = {
    type: ItemType.GENERAL ,
    name: 'Fake Item',
    id: '-1',
    postDate: 1, // save the time we assume that action is executed in real
    remain: 0,
    cost: 0,
    unit: 'kg',
    amount: 0,
    actionDate: 1, // save the time we create action 
    photoUrl: DEFAULT_ITEM_IMAGE,
    userId: '-1',
    placeId: '-1'
}

export const addItem = async (item: Item, storex = store)=>{
    const {id , ...rest} = item 
    const res = await firebase.firestore().collection(ITEM_COLLECTION)
    .add(rest)

    return res.id
}


export const updateAmountOfItem = async (item: Item )=>{
    const { id, ...rest } = item
    return await firebase.firestore().collection(ITEM_COLLECTION).doc(item.id).update({
        ...rest
    })
}

export const updateItems = async(items: Map<string, Item>, storex= store)=>{
    return storex.dispatch(actions.getItems(items))
}