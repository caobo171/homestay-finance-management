import React from 'react'
import styled from 'styled-components/macro'
import UserAvatar from 'components/UserAvatar.tsx'
import { useCurrentUser } from 'store/user/hooks'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
`

const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    font-size: 16px;
    font-weight: 500;
`

const StyledLogoutButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
`


const UserInfo = React.memo(()=>{
    const currentUser  = useCurrentUser()

    return (
        <Wrapper>
            <UserAvatar userId={currentUser? currentUser.id: '-1'}/>
            <StyledName>{currentUser ? currentUser.displayName : ''}</StyledName>
        </Wrapper>
    )
})

export default UserInfo