import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Item, { ItemFilterType } from 'store/item/types'
import ItemRow from './ItemRow'
import AddActivityButton from 'components/AddActivityButton'
import { useItems } from 'store/item/hooks'
import SearchBox from './Searchbox'
import { CssVariable } from 'Constants'
import { reformatString } from 'service/helpers'



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`

const StyledListUserWrapper = styled.div`
    width : 100%;
    overflow-y: scroll;
    max-height: ${window.innerHeight - 200}px;

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



const StyledFilterWrapper = styled.div`
    height: 32px;
    width: 100%;
    background-color: ${CssVariable.PRIMARY_COLOR};
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const StyledFilterItemWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    cursor: pointer;
`

const StyledSpan = styled.span<{ active: boolean }>`
    opacity: ${props => props.active ? 1 : 0.7}; 
`

const filterBySearchString = (items: Item[], searchString: string) => {
    const rSearchString = reformatString(searchString)

    return items.filter(item => reformatString(item.name).indexOf(rSearchString) > -1)
}

const filterByType = (items: Item[], type: ItemFilterType) => {
    return items.filter(item => {
        return (type === ItemFilterType.AVAILABLE && item.remain > 0)
            || (type === ItemFilterType.UN_AVAILABLE && item.remain <= 0)
    })
}

const ItemList = () => {

    const [searchString, setSearchString] = useState('')

    const [type, setType] = useState<ItemFilterType>(ItemFilterType.AVAILABLE)
    const items = useItems()
    const displayItems = filterBySearchString(filterByType(items, type), searchString)
    return (
        <Wrapper>
            <StyledFilterWrapper>
                <StyledFilterItemWrapper
                    onClick={() => setType(ItemFilterType.AVAILABLE)}
                >
                    <StyledSpan active={type === ItemFilterType.AVAILABLE}>{'Đồ  Còn'}</StyledSpan>
                </StyledFilterItemWrapper>
                <StyledFilterItemWrapper
                    onClick={() => setType(ItemFilterType.UN_AVAILABLE)}
                ><StyledSpan active={type === ItemFilterType.UN_AVAILABLE}>{'Đồ  Hết'}</StyledSpan></StyledFilterItemWrapper>
            </StyledFilterWrapper>
            <SearchBox searchString={searchString}
                setSearchString={setSearchString} />
            <StyledListUserWrapper>
                {
                    displayItems.map((item: Item) => {
                        return <ItemRow key={item.id} item={item} />
                    })
                }
            </StyledListUserWrapper>
            <AddActivityButton />
        </Wrapper>
    )
}


export default ItemList