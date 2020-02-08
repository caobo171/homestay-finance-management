import React from 'react'
import styled from 'styled-components/macro'
import UserAvatar from 'components/UserAvatar'
import { User } from 'store/user/types'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
    margin-left: 16px;
`

const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    font-size: 16px;
    font-weight: 500;
`

interface Props{
    user: User
}

const UserInfo = ({user}: Props)=>{
    return (
        <Wrapper>
            <UserAvatar userId={user.id}/>
            <StyledName>{user.displayName}</StyledName>
        </Wrapper>
    )
}

export default UserInfo