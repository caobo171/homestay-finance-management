import React, { useState } from 'react'
import styled from 'styled-components'
import ItemPick from 'pages/Form/Itempicker/ItemPick'
import Item from 'store/item/types'
import { User } from 'store/user/types'
import UserGroup from 'components/UserGroup'
import UserPick from './UserPick'


const StyledWrapper = styled.div`
    width: 95%;
`
const StyledHeader = styled.div`
    margin-bottom: 8px;
    margin-left: 14px;
`

interface Props {
    pickedUsers:Map<string,User> , 
    setPickedUsers: (value:Map<string,User> ) => void
}
const UserPicker = ({
    pickedUsers, setPickedUsers
}: Props)=>{

    

    const addPickUser = (user: User)=>{
        let mapItem = new Map(pickedUsers)
        mapItem = mapItem.set(user.id,user)

        setPickedUsers(mapItem)
    }

    const removePickedUser = (userId: string)=>{
        let mapItem = new Map(pickedUsers)
        mapItem.delete(userId)

        setPickedUsers(mapItem)
    }

    const displayUsers =  [...pickedUsers.values()] 
    return (
       <StyledWrapper>
           <StyledHeader>
               Chọn người sử dụng*
           </StyledHeader>

            {
                displayUsers.length > 0 && <UserGroup userIds={
                    displayUsers.map(e=> e.id)
                }/>
            }
           
           
            <UserPick addPickUser={addPickUser} 
            pickedUsers = {displayUsers}
            />
           
       </StyledWrapper>
    )   
}

export default UserPicker