import React from 'react'
import styled from 'styled-components/macro'
import UserAvatar from 'components/UserAvatar'
import { useCurrentUser } from 'store/user/hooks'
import { AppRouterContext } from 'navigation/AppRouter'
import CurrentUser from 'service/CurrentUser'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
    cursor: pointer;
`

const StyledName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    font-size: 16px;
    font-weight: 500;
`


const UserInfo = React.memo(() => {


    const currentUser = useCurrentUser()
    const onClickHandle = () => {
        AppRouterContext.ref.props.history.push(`/user/${CurrentUser.user ? CurrentUser.user.id : '-1'}`)
    }
    return (
        <Wrapper onClick={onClickHandle}>
            <UserAvatar userId={currentUser ? currentUser.id : '-1'} />
            <StyledName>{currentUser ? currentUser.displayName : ''}</StyledName>
        </Wrapper>
    )
})

export default UserInfo