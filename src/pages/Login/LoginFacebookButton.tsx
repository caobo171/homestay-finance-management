import React from 'react'
import styled from 'styled-components'
import FacebookIcon from 'icons/FacebookIcon'
import { CssVariable } from 'Constants'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ececec;
    padding: 12px;
    border-radius: 50px;
`
const StyledFacebookLogo = styled(FacebookIcon)`
    height: 16px;
    margin-right: 10px;
`

const StyledText = styled.span`
    text-transfrom: capitalize;
    color: ${CssVariable.TEXT_COLOR_H2};
    font-size: 16px;
    
`
const LoginFacebookButton = ()=>{
    return (
        <StyledWrapper>
            <StyledFacebookLogo/>
            <StyledText>
                Login With Facebook
            </StyledText>
        </StyledWrapper>
    )
}
export default LoginFacebookButton