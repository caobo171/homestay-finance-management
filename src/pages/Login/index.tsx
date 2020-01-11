import React from 'react'
import styled from 'styled-components'
import { CssVariable } from 'Constants'
import LogoIcon from 'icons/LogoIcon'
import LoginFacebookButton from './LoginFacebookButton'


const StyledWrapper = styled.div`
    width: 100%;
    height: ${window.innerHeight}px;
    background-color: ${CssVariable.PRIMARY_COLOR};
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const StyledBranding = styled.div`
    color: ${CssVariable.TEXT_COLOR_H1};
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
`

const StyledLogo = styled(LogoIcon)`
    height: 100px;
    margin-bottom: 20px;
`

const Login = ()=>{
    
    return (
        <StyledWrapper>
            <StyledLogo/>
            <StyledBranding>Finance Management</StyledBranding>
            <LoginFacebookButton/>
        </StyledWrapper>
    )
}

export default Login