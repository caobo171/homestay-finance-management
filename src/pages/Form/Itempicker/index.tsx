import React, { useState } from 'react'
import styled from 'styled-components'
import ItemPick from 'pages/Form/Itempicker/ItemPick'
import ItemComponent from './ItemComponent'
import Item from 'store/item/types'


const StyledWrapper = styled.div`
    width: 95%;
`
const StyledHeader = styled.div`
    margin-bottom: 8px;
    margin-left: 14px;
`

export interface PickedItemType {
    pickAmount: number,
    item: Item,

}

interface Props {
    pickedItems: Map<string, PickedItemType>,
    setPickedItems: (value: Map<string, PickedItemType>) => void,
    title: string
}
const ItemPicker = ({
    pickedItems,
    setPickedItems,
    title
}: Props) => {



    const addPickItem = (item: Item, pick: number) => {
        let mapItem = new Map(pickedItems)
        mapItem = mapItem.set(item.id, {
            pickAmount: pick,
            item: item
        })

        setPickedItems(mapItem)
    }

    const removePickItem = (itemId: string) => {
        let mapItem = new Map(pickedItems)
        mapItem.delete(itemId)

        setPickedItems(mapItem)
    }

    const displayItems = [...pickedItems.values()]
    return (
        <StyledWrapper>
            <StyledHeader>
                {title}
           </StyledHeader>

            {
                displayItems.map(item => {
                    return <ItemComponent key={item.item.id} item={item}
                        onRemoveItem={removePickItem}
                    />
                })
            }


            <ItemPick addPickItem={addPickItem}
                pickedItems={displayItems.map(e => e.item)} />

        </StyledWrapper>
    )
}

export default ItemPicker