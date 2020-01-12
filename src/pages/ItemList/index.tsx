import React from 'react'
import styled from 'styled-components/macro'
import Item from 'store/item/types'
import ItemRow from './ItemRow'
import Constants from 'Constants'
import {FAKEITEM_DATA } from 'fakedata'
import AddActivityButton from 'components/AddActivityButton'
import { useItems } from 'store/item/hooks'



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`

const StyledListUserWrapper = styled.div`
    width : 100%;
`

const ItemList = () => {

    const items = useItems()
    return (
        <Wrapper>
            <StyledListUserWrapper>
                {
                    items.map((item: Item) => {
                        return <ItemRow item={item} />
                    })
                }
            </StyledListUserWrapper>
            <AddActivityButton/>
        </Wrapper>
    )
}


export default ItemList