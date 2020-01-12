import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    
    width: 225px;
    display: flex;
    flex-direction: column;
    background-color: #F6F6F6;
`

const StyledItem = styled.div`
    display:flex;
    align-items: center;
    justify-content:  center;
    border: 1px solid #D6E4FF;
    width: 100%;
    height: 42px;
`


const SelectForm = () => {
    return (
        <StyledWrapper>
            <SelectItem/>
            <SelectItem/>
        </StyledWrapper>
    )
}




const SelectItem = () => {
    return (
        <StyledItem><span>Mua đồ</span></StyledItem>
    )
}


export default SelectForm;
