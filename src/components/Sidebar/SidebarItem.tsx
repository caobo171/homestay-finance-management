import React from 'react'
import styled from 'styled-components/macro'

const StyledWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 400;
`

interface Props {
    name: string,

}

const NavbarItem = ({name}: Props)=>{
    return <StyledWrapper>
        {name}
    </StyledWrapper>
}


export default NavbarItem