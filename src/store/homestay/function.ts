import firebase  from 'firebase'
import HomeStay, { FAKE_IMAGE_HOMESTAY } from './types'
import store from 'store/store'
import * as actions from './actions'


export const HOMESTAY_COLLECTION = 'homestays'

export const DEFAULT_ITEM_IMAGE = 'https://primerize.stanford.edu/site_media/images/fg_question.png'

export const FAKE_HOMESTAY: HomeStay = {
    id: '-1',
    name: 'Fake HomeStay',
    description: "this is a fake homestay",
    photoUrl: FAKE_IMAGE_HOMESTAY
}

export const addHomestay = async (homestay: HomeStay , storex = store)=>{
    const {id , ...rest} = homestay 
    const res = await firebase.firestore().collection(HOMESTAY_COLLECTION)
    .add(rest)

    return res.id
}


export const updateHomeStays = async(homestays: Map<string, HomeStay>, storex= store)=>{
    return storex.dispatch(actions.getHomeStays(homestays))
}