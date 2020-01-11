import React from 'react'
import styled from 'styled-components'
import UserAvatar from 'components/UserAvatar.tsx'
import Item from 'store/item/types'
import ItemImage from 'components/ItemImage'
import { CssVariable } from 'Constants'

const Wrapper = styled.div`
    height: 78px;
    justify-content: flex-start;

    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;
    
    font-weight: 500;
    color: ${CssVariable.TEXT_COLOR_H2}
`

const StyledRowItem = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    padding-left: 20px;

    padding-top: 8px;
`

const StyledItemInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    align-items: center;
    padding-left: 20px;
    padding-top: 8px;

`

const StyledName = styled.span`
    margin-left: 8px;
    font-size: 16px;
`

const StyledText = styled.span`
    font-size: 16px;
`

interface Props {
    item: Item
}

const UserRow = ({ item }: Props) => {
    return <Wrapper>
        <StyledItemInfo>
            <ItemImage />
            <StyledName>{item.name}</StyledName>
        </StyledItemInfo>
        <StyledRowItem>
            <StyledText>-Remain: {item.remain} -Total: {item.cost}đ</StyledText>

        </StyledRowItem>
    </Wrapper>
}

export default UserRow;