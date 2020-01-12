import React from 'react'
import styled from 'styled-components/macro'
import UserAvatar from 'components/UserAvatar.tsx'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
    margin-top: 16px;
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


const UserInfo = ()=>{
    return (
        <Wrapper>
            <UserAvatar/>
            <StyledName>Nguyễn Văn Cao</StyledName>
        </Wrapper>
    )
}

export default UserInfo