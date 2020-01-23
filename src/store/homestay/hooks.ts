import {useSelector } from 'react-redux'
import store from 'store/store'
import Item, { State } from './types'
import { FAKE_HOMESTAY } from './function'

export const useHomeStays = ()=>{
     return useSelector((state: {
         homestay: State
     })=> [...state.homestay.listHomeStay.values()])
}


export const useHomeStay = (homestayId: string)=>{
    return useSelector((state: {
        homestay: State
    })=> (state.homestay.listHomeStay.get(homestayId) || homestayId ))
}
