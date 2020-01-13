import React, { useCallback } from 'react'
import styled from 'styled-components'
import Item from 'store/item/types'
import ItemImage from 'components/ItemImage'
import { CssVariable } from 'Constants'
import { User } from 'store/user/types'
import UserAvatar from 'components/UserAvatar'
import { AppRouterContext } from 'navigation/AppRouter'

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
    user: User
}

const UserRow = React.memo(({ user }: Props) => {


    const onClickHandle = useCallback(()=>{
        AppRouterContext.ref.props.history.push(`user/${user.id}`)
    },[user.id])

    return <Wrapper onClick={onClickHandle}>
        <StyledRowItem>
            <UserAvatar userId={user.id}/>
            <StyledName>{user.displayName}</StyledName>
        </StyledRowItem>
         {/* <StyledRowItem>
            <StyledText>-Remain: {item.remain}  -Total: {item.cost}đ</StyledText>

        </StyledRowItem> */}
    </Wrapper>
},(next,prev)=> next.user.id === prev.user.id)

export default UserRow;