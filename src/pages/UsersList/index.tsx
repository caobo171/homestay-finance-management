import React from 'react'
import styled from 'styled-components/macro'
import { User } from 'store/user/types'

import UserRow from './UserRow'



const FAKEUSER_DATA: User[] = [
    {
        displayName: 'Nguyen Van Cao',
        id: '1',
        photoURL: 'https://data-gcdn.basecdn.net/avatar/sys1/8e/ca/f6/00/20/504d5bda87c57c66b1a1fe2e52c0dad8/0.caonguyen_1.jpg',
        email: 'caobo171@gmail.com',
        role: 'member',
        placeId: '1'
    },
    {
        displayName: 'Nguyen Van Cao',
        id: '2',
        photoURL: 'https://data-gcdn.basecdn.net/avatar/sys1/8e/ca/f6/00/20/504d5bda87c57c66b1a1fe2e52c0dad8/0.caonguyen_1.jpg',
        email: 'caobo171@gmail.com',
        role: 'member',
        placeId: '1'
    },
    {
        displayName: 'Nguyen Van Cao',
        id: '3',
        photoURL: 'https://data-gcdn.basecdn.net/avatar/sys1/8e/ca/f6/00/20/504d5bda87c57c66b1a1fe2e52c0dad8/0.caonguyen_1.jpg',
        email: 'caobo171@gmail.com',
        role: 'member',
        placeId: '1'
    }
]

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
`

const StyledListUserWrapper = styled.div`
    width : 100%;
`

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 32px;
    background-color: #EDEDED;
    margin-top: 20px;
    width: 100%;
    justify-content: flex-start;
`

const StyledHeaderItem = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 20px;
`

const UserList = () => {
    return (
        <Wrapper>
            <StyledHeader>
                    <StyledHeaderItem></StyledHeaderItem>
                    <StyledHeaderItem>User Name</StyledHeaderItem>
                    <StyledHeaderItem>Fee This Month</StyledHeaderItem>
            </StyledHeader>
            <StyledListUserWrapper>
                {
                    FAKEUSER_DATA.map((user: User) => {
                        return <UserRow user={user} />
                    })
                }
            </StyledListUserWrapper>

        </Wrapper>
    )
}


export default UserList