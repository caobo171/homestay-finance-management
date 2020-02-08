import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Item from 'store/item/types'
import ItemRow from './ItemRow'
import AddActivityButton from 'components/AddActivityButton'
import { useItems } from 'store/item/hooks'
import SearchBox from './Searchbox'



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`

const StyledListUserWrapper = styled.div`
    width : 100%;
    overflow-y: scroll;
    max-height: ${window.innerHeight - 150}px;

    &::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1); 
    }
`

const filterBySearchString = (items: Item[], searchString: string) => {
    const rSearchString = searchString.toLowerCase().replace(/\s/g, '')

    return items.filter(item => item.name.toLowerCase()
        .replace(/\s/g, '').indexOf(rSearchString) > -1)
}

const ItemList = () => {

    const [searchString, setSearchString] = useState('')
    const items = useItems()
    const displayItems = filterBySearchString(items, searchString)
    return (
        <Wrapper>
            <SearchBox searchString = {searchString} 
            setSearchString={setSearchString}/>
            <StyledListUserWrapper>
                {
                    displayItems.map((item: Item) => {
                        return <ItemRow key={item.id} item={item} />
                    })
                }
            </StyledListUserWrapper>
            <AddActivityButton/>
        </Wrapper>
    )
}


export default ItemList