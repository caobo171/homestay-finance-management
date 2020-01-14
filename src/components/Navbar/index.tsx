import React from 'react'
import styled from 'styled-components'
import { CssVariable } from 'Constants'
import MenuIcon from 'icons/MenuIcon'
import { useLocation, useParams } from 'react-router-dom'
import BackIcon from 'icons/BackIcon'
import { User } from 'store/user/types'
import Item from 'store/item/types'
import { useUser } from 'store/user/hooks'
import { useItem } from 'store/item/hooks'
import { AppRouterContext } from 'navigation/AppRouter'

const StyledWrapper = styled.div`
    height: 52px;
    width: 100%;
    background-color: ${CssVariable.PRIMARY_COLOR};
    display: flex;
    flex-direction: row;
    align-items: center;
`

const StyledMenuLogo = styled(MenuIcon)`
    margin-left: 18px;
    margin-right: 12px;
`


const StyledBackLogo = styled(BackIcon)`
    margin-left: 18px;
    margin-right: 12px;
`

const StyledTitle = styled.span`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 500;
    color: ${CssVariable.TEXT_COLOR_H1}
`


const renderPathName = (pathname: string , item: Item , user: User) => {
    if(user.id !== '-1') return user.displayName
    if(item.id !== '-1') return item.name
    switch (pathname) {
        case '/': {
            return 'Checkin'
        }
        case '/items': {
            return 'Items'
        }
        case '/users': {
            return 'Users'
        }
        default: {
            return 'Finance'
        }
    }
}

interface Props {
    onClickMenu: () => void
}

const Navbar = React.memo(({ onClickMenu }: Props) => {

    const location = useLocation()

    const param = useParams<{ id: string }>()
    //@ts-ignore
    window.val = location

    console.log(param.id)

    const isDetailPage = location.pathname.indexOf('user/') != -1 || location.pathname.indexOf('item/') != -1

    const id = location.pathname.replace('/user/', '').replace('/item/', '')

    const user: User = useUser(id)
    const item: Item = useItem(id)



    const onBackClick = () => {
        AppRouterContext.ref.props.history.goBack()
    }

    return (
        <StyledWrapper>
            {
                !(location.pathname === '/login') &&
                (
                    <>
                        {isDetailPage ? <StyledBackLogo
                            onClick={onBackClick}
                        /> :
                            <StyledMenuLogo onClick={onClickMenu} />}

                        <StyledTitle>{
                            renderPathName(location.pathname, item, user)
                        }</StyledTitle>
                    </>
                )
            }

        </StyledWrapper>
    )
})

export default Navbar