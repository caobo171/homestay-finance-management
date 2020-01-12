import { action, createAction } from "typesafe-actions"
import  Item from "./types"



export const addItem = createAction('item/add' , 
(item: Item)=> (item))<Item>()

export const deleteItem = createAction('Item/delete' , 
(item: Item)=> (item))<Item>()

export const editItem = createAction('Item/edit',
(item: Item)=>(item))<Item>()


export const getItems = createAction('Item/list',
(items: Map<string, Item>)=>(items))<Map<string, Item>>()