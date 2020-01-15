import React, { useState } from 'react'
import styled from 'styled-components'
import ItemPick from 'pages/Form/Itempicker/ItemPick'
import Item from 'store/item/types'
import { User } from 'store/user/types'
import UserGroup from 'components/UserGroup'
import UserPick from './UserPick'
import CloseIcon from 'icons/CloseIcon'
import TrashIcon from 'icons/TrashIcon'


const StyledWrapper = styled.div`
    width: 95%;
`
const StyledHeader = styled.div`
    margin-bottom: 8px;
    margin-left: 14px;
`

interface Props {
    pickedUsers: Map<string, User>,
    setPickedUsers: (value: Map<string, User>) => void
}

const StyledUserGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledCloseIcon = styled(TrashIcon)`
    margin-right: 12px;
`
const UserPicker = ({
    pickedUsers, setPickedUsers
}: Props) => {



    const addPickUser = (user: User) => {
        let mapItem = new Map(pickedUsers)
        mapItem = mapItem.set(user.id, user)

        setPickedUsers(mapItem)
    }

    const displayUsers = [...pickedUsers.values()]
    return (
        <StyledWrapper>
            <StyledHeader>
                Chọn người sử dụng*
           </StyledHeader>

            <StyledUserGroupWrapper>
                {
                    displayUsers.length > 0 && <>
                        <UserGroup userIds={
                            displayUsers.map(e => e.id)
                        } />
                        <StyledCloseIcon onClick={() => setPickedUsers(new Map())} />
                    </>
                }

            </StyledUserGroupWrapper>

            <UserPick addPickUser={addPickUser}
                pickedUsers={displayUsers}
            />

        </StyledWrapper>
    )
}

export default UserPicker