import React from 'react'
import styled from 'styled-components'
import { CssVariable } from 'Constants'
import PlusIcon from 'icons/PlusIcon'


const StyledWrapper = styled.div`
    background-color: ${CssVariable.PRIMARY_COLOR};
    
    width: 72%;
    min-height: 36px;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
   
    margin-top: 20px;
    text-transform: capitalize;

    align-items: center;
    padding-left: 36px;
`

const StyledPlusIcon = styled(PlusIcon)`
    margin-left: 12px;
`

const StyledName = styled.div`
    font-size: 16px;
    font-weight: 500;
`

const CreateActivityButton = ()=>{
    return (
        <StyledWrapper>
            <StyledName>Create Activity</StyledName>
            <StyledPlusIcon/>
        </StyledWrapper>
    )
}

export default CreateActivityButton