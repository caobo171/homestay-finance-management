import React from 'react'
import styled from 'styled-components'
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
    color: ${CssVariable.TEXT_COLOR_H2};

    display: flex;
    flex-wrap : wrap;

`

const StyledRowItem = styled.div`
    display: flex;
    flex-basis: 480px;
    align-items: center;
    padding-left: 20px;
    flex-direction: row;
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
        <StyledRowItem>
            <ItemImage />
            <StyledName>{item.name}</StyledName>
        </StyledRowItem>
        <StyledRowItem>
            <StyledText>-Remain: {item.remain}  -Total: {item.cost}đ</StyledText>

        </StyledRowItem>
    </Wrapper>
}

export default UserRow;