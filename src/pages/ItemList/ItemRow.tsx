import React from 'react'
import styled from 'styled-components'
import UserAvatar from 'components/UserAvatar.tsx'
import Item from 'store/item/types'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 48px;
    background-color: #EDEDED;
    margin-top: 20px;
    justify-content: flex-start;
`

const StyledRowItem = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 20px;
`

interface Props {
    item: Item
}

const UserRow = ({item}: Props)=>{
    return <Wrapper>
        <StyledRowItem>
            <UserAvatar></UserAvatar>
        </StyledRowItem>
        <StyledRowItem>
            {item.name}
        </StyledRowItem>
        <StyledRowItem>
            {item.remain}
        </StyledRowItem>
    </Wrapper>
}

export default UserRow;