import React from 'react'
import styled from 'styled-components/macro'
import UserAvatar from 'components/UserAvatar'
import ItemImage from 'components/ItemImage'
import Item from 'store/item/types'
import { useUser } from 'store/user/hooks'

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
    margin-top: 16px;
    margin-left: 16px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2px;
    margin-left: 16px;

    align-items: center;
`

const StyledText = styled.span`
    font-size: 12px;
`

const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    font-size: 16px;
    font-weight: 500;
`

interface Props {
    item: Item
}

const ItemInfo = ({ item }: Props) => {

    const user = useUser(item.userId)

    return (
        <Wrapper>
            <ItemWrapper>
                <ItemImage itemId={item.id} />
                <StyledName>{item.name}</StyledName>
            </ItemWrapper>

            <UserWrapper>
                <StyledText>Tạo bởi</StyledText>
                <StyledName>{user.displayName}</StyledName>
            </UserWrapper>
        </Wrapper>
    )
}

export default ItemInfo