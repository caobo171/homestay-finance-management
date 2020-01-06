import React from 'react'
import styled from 'styled-components'
import { User } from 'store/user/types'
import UserAvatar from 'components/UserAvatar.tsx'

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
    user: User
}

const UserRow = ({user}: Props)=>{
    return <Wrapper>
        <StyledRowItem>
            <UserAvatar></UserAvatar>
        </StyledRowItem>
        <StyledRowItem>
            {user.displayName}
        </StyledRowItem>
        <StyledRowItem>
            {'300000đ'}
        </StyledRowItem>
    </Wrapper>
}

export default UserRow;