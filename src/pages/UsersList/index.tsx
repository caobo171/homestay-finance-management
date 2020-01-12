import React from 'react'
import styled from 'styled-components/macro'
import Item from 'store/item/types'
import UserRow from './UserRow'
import Constants from 'Constants'
import {FAKEITEM_DATA } from 'fakedata'
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
`

const UserList = () => {

    const users = useUserList()
    return (
        <Wrapper>
            <StyledListUserWrapper>
                {
                    users.map((user: User) => {
                        return <UserRow user={user} />
                    })
                }
            </StyledListUserWrapper>
            <AddActivityButton/>
        </Wrapper>
    )
}


export default UserList