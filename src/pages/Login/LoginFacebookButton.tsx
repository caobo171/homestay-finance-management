import React, { useCallback } from 'react'
import styled from 'styled-components'
import FacebookIcon from 'icons/FacebookIcon'
import { CssVariable } from 'Constants'
import { login } from 'store/user/function'

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
const LoginFacebookButton = React.memo(()=>{

    const loginHandle = useCallback(()=>{
        login()
    },[])
    return (
        <StyledWrapper onClick={loginHandle}> 
            <StyledFacebookLogo/>
            <StyledText>
                Login With Facebook
            </StyledText>
        </StyledWrapper>
    )
})
export default LoginFacebookButton