import React from 'react'
import styled from 'styled-components/macro'
import Item from 'store/item/types'
import ItemRow from './ItemRow'
import Constants from 'Constants'



const FAKEITEM_DATA: Item[] = [
    {
        type: 'not_general',
        name: 'Thịt lợn',
        id: '1',
        postDate: 1578285889603,
        remain: 0.2,
        cost: 150000,
        amount: 0.5
    },
    {
        type: 'not_general',
        name: 'Bắp cải',
        id: '2',
        postDate: 1578285889603,
        remain: 0.1,
        cost: 15000,
        amount: 0.4
    },
]

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-end;
`

const StyledListUserWrapper = styled.div`
    width : 100%;
`

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 32px;
    background-color: #EDEDED;
    margin-top: 20px;
    width: 100%;
    justify-content: flex-start;
`

// const StyledHeaderItem = styled.div`
//     display: flex;
//     align-items: center;
//     flex: 1;
//     padding-left: 20px;
// `

const StyledButton = styled.div`
    height: 42px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding-left: 20px;
    padding-right: 20px;

    margin-top: 40px;
    
    background-color: ${Constants.green};
`

const ItemList = () => {
    return (
        <Wrapper>
            <StyledButton>
                Add Item
            </StyledButton>
            <StyledListUserWrapper>
                {
                    FAKEITEM_DATA.map((item: Item) => {
                        return <ItemRow item={item} />
                    })
                }
            </StyledListUserWrapper>

        </Wrapper>
    )
}


export default ItemList