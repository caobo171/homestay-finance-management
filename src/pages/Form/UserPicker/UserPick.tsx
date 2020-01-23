import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchIcon from 'icons/SearchIcon'
import ItemImage from 'components/ItemImage'
import { useRemainItems } from 'store/item/hooks'
import Item from 'store/item/types'
import ObjectPicker from 'components/ObjectPicker'
import { User } from 'store/user/types'
import { CssVariable } from 'Constants'
import PlusIcon from 'icons/PlusIcon'
import UserAvatar from 'components/UserAvatar'
import { useRemainUsers } from 'store/user/hooks'

const StyledWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    align-items: center;
`



const StyledInput = styled.input`
    background: #DFDFDF;
    height: 24px;
    width: 20px;
    max-width: 30px;
    border:none;
    border-radius: 8px;
    padding-left: 8px;
    margin-left: 4px;
`

const StyledPopUpItem = styled.div`
    height: 34px;
    width: 190px;
    display: flex;
    flex-direction: row;
    background-color: #e2e2e2;

    align-items: center;
    padding-left: 10px;
`

const StyledText = styled.div`
    margin-left: 8px;
    font-size: 12px;
`

const StyledPlusButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: ${CssVariable.PRIMARY_COLOR};
    margin:8px;
`

const StyledPlusIcon = styled(PlusIcon)`
    height: 12px;
`


interface Props {
    addPickUser: (user: User) => void,
    pickedUsers: User[],
    type? : 'all' | 'place'
}

const filterBySearchString = (users: User[], searchString: string) => {
    const rSearchString = searchString.toLowerCase().replace(/\s/g, '')

    return users.filter(user => (user.displayName ? user.displayName : '').toLowerCase()
        .replace(/\s/g, '').indexOf(rSearchString) > -1)
}

const UserPick = ({ addPickUser, pickedUsers ,type }: Props) => {

    const [searchString, setSearchString] = useState('')
    const avalableUsers = useRemainUsers(pickedUsers)

    const [currentUser, setCurrentUser] = useState<null | User>(null)

    const displayUsers = filterBySearchString(avalableUsers, searchString)

    const onChooseUserHandle = useCallback((value: User | null) => {
        setCurrentUser(value)
    }, [currentUser])

    const onAddItemHandle = useCallback(() => {
        if (currentUser) {
            addPickUser(currentUser)
            setCurrentUser(null)
            setSearchString('')
        }

    }, [currentUser])

    return (
        <StyledWrapper>
            <ObjectPicker

                searchString={searchString}
                setSearchString={setSearchString}
                displayData={displayUsers}
                setCurrentObject={onChooseUserHandle}
                renderer={OptionRow}

                currentObject={currentUser}
                currentObjectRender={currentUser ?
                    <>
                        <UserAvatar
                            height={20}
                            userId={currentUser.id} />
                        <StyledText>
                            {currentUser.displayName}
                        </StyledText>
                    </> : null} />
            {
                currentUser && (
                    <StyledPlusButton onClick={onAddItemHandle}>
                        <StyledPlusIcon />
                    </StyledPlusButton>
                )
            }

        </StyledWrapper>
    )
}


export default UserPick

interface OptionProps {
    data: User,
    onClick: () => void
}

const OptionRow = (props: OptionProps) => {
    return <StyledPopUpItem onClick={props.onClick}>
        <UserAvatar userId={props.data.id} height={20} />
        <StyledText>
            {props.data.displayName}
        </StyledText>
    </StyledPopUpItem>
}

