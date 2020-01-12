import {useSelector } from 'react-redux'
import store from 'store/store'
import { State } from './types'

export const useItems = ()=>{
     return useSelector((state: {
         item: State
     })=> [...state.item.listItems.values()])
}