import React from 'react'
import styled from 'styled-components/macro'
import UserAvatar from 'components/UserAvatar.tsx'

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
`

const StyledLogoutButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
`


const UserInfo = ()=>{
    return (
        <Wrapper>
            <UserAvatar/>
            <StyledName>Nguyễn Văn Cao</StyledName>
            <StyledLogoutButton> Logout </StyledLogoutButton>
        </Wrapper>
    )
}

export default UserInfo