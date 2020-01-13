import {useSelector } from 'react-redux'
import store from 'store/store'
import Item, { State } from './types'
import { FAKE_ITEM } from './function'

export const useItems = ()=>{
     return useSelector((state: {
         item: State
     })=> [...state.item.listItems.values()])
}


export const useItem = (itemId: string)=>{
    return useSelector((state: {
        item: State
    })=> (state.item.listItems.get(itemId) || FAKE_ITEM ))
}

export const useRemainItems = (pickedItems : Item[])=>{

    const pickedItemIds = pickedItems.map(e=>e.id)
    return useSelector((state: {
        item: State
    })=> [...state.item.listItems.values()].filter(item=> item.remain> 0 
        && pickedItemIds.indexOf(item.id) === -1))
}