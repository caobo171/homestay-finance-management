import React from 'react'
import styled from 'styled-components/macro'
import UserRow from './UserRow'
import AddActivityButton from 'components/AddActivityButton'
import { useItems } from 'store/item/hooks'
import { useUserList } from 'store/user/hooks'
import { User } from 'store/user/types'



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
`

const StyledListUserWrapper = styled.div`
    width : 100%;
    overflow-y: scroll;
    max-height: ${window.innerHeight - 150}px;

    &::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1); 
    }
`

const UserList = () => {

    const users = useUserList()
    return (
        <Wrapper>
            <StyledListUserWrapper>
                {
                    users.map((user: User) => {
                        return <UserRow key={user.id} user={user} />
                    })
                }
            </StyledListUserWrapper>
            <AddActivityButton/>
        </Wrapper>
    )
}


export default UserList