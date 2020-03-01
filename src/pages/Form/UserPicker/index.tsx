import React from 'react'
import styled from 'styled-components'
import { User } from 'store/user/types'
import UserGroup from 'components/UserGroup'
import UserPick from './UserPick'
import TrashIcon from 'icons/TrashIcon'
import Constants from 'Constants'


const StyledWrapper = styled.div`
    width: 95%;
    font-size: ${Constants.LABEL_FONTSIZE}px;
`
const StyledHeader = styled.div`
    margin-bottom: 8px;
    margin-left: 14px;
`

interface Props {
    pickedUsers: Map<string, User>,
    setPickedUsers: (value: Map<string, User>) => void,
    type? : 'all' | 'place',
    title: string
}

const StyledUserGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const StyledCloseIcon = styled(TrashIcon)`
    margin-right: 12px;
`
const UserPicker = ({
    pickedUsers, setPickedUsers , type, title
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
                {title} 
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
                type={type}
            />

        </StyledWrapper>
    )
}

export default UserPicker