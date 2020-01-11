import React from 'react'
import styled from 'styled-components/macro'

const StyledWrapper = styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 8px;
    padding-right: 12px;
    font-weight: 400;
    height: 36px;
    width: 80%;
    min-height: 36px;
    margin-top: 8px;
`

const StyledIcon = styled.div`
    margin-right: 8px;
`

const StyledSpan = styled.span`

`

interface Props {
    name: string,
    icon : React.ElementType<any>
}

const NavbarItem = ({name, icon}: Props)=>{
    const Icon = icon
    return <StyledWrapper >
        <StyledIcon>
            <Icon/>
        </StyledIcon>
        <StyledSpan>{name}</StyledSpan>
    </StyledWrapper>
}


export default NavbarItem