import React from 'react'
import styled from 'styled-components'
import UserAvatar from 'components/UserAvatar.tsx'

const StyledWrapper = styled.div`

`

const UserGroup = ()=>{
    return (
        <StyledWrapper>
            <UserAvatar size ="small"/>
            <UserAvatar size ="small"/>
            <UserAvatar size ="small"/>
        </StyledWrapper>
    )
}

export default UserGroup