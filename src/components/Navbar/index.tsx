import React from 'react'
import styled from 'styled-components'
import { CssVariable } from 'Constants'
import MenuIcon from 'icons/MenuIcon'
import { useLocation } from 'react-router-dom'

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
const StyledTitle = styled.span`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 500;
    color: ${CssVariable.TEXT_COLOR_H1}
`


const renderPathName =(pathname:string)=>{
    switch(pathname){
        case '/':{
            return 'Checkin'
        }
        case '/items':{
            return 'Items'
        }
        case '/users':{
            return 'Users'
        }
        default: {
            return 'Finance'
        }
    }
}

interface Props {
    onClickMenu: ()=> void
}

const Navbar = React.memo(({onClickMenu}: Props) => {

    const location = useLocation()



    return (
        <StyledWrapper>
            {
                ! (location.pathname === '/login') &&
                (
                    <>
                        <StyledMenuLogo onClick= {onClickMenu}/>
                        <StyledTitle>{renderPathName(location.pathname)}</StyledTitle>
                    </>
                )
            }

        </StyledWrapper>
    )
})

export default Navbar