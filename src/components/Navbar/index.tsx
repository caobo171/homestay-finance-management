import React from 'react'
import styled from 'styled-components'
import { CssVariable } from 'Constants'
import MenuIcon from 'icons/MenuIcon'

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

const Navbar = ()=>{
    return (
        <StyledWrapper>
            <StyledMenuLogo/>
            <StyledTitle>Users</StyledTitle>
        </StyledWrapper>
    )
}

export default Navbar