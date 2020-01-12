import React from 'react'
import styled from 'styled-components'
import { CssVariable } from 'Constants'
import PlusIcon from 'icons/PlusIcon'



const StyledWrapper = styled.div`
    position: absolute;
    height: 42px;
    width: 42px;
    bottom: 32px;
    right: 32px;
    display: flex;
    border-radius: 50%;
    background-color: ${CssVariable.PRIMARY_COLOR};
    justify-content: center;
    align-items: center;

  
`

const StyledPlusIcon = styled(PlusIcon)`
    fill: #ffffff;
`

const AddActivityButton = ()=>{
    return <StyledWrapper>
        <StyledPlusIcon/>
    </StyledWrapper>
}


export default AddActivityButton