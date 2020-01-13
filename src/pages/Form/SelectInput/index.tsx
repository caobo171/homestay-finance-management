import React, { useCallback } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;

    margin: 12px 0px 6px 0px;
    flex-direction: row;
    align-items: center;
`

const StyledLabel = styled.div`
    flex: 0.5;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledSelect = styled.select`
    height: 30px;
    flex: 1.5;
    border: none;
    background: #DFDFDF;
    padding-left: 12px;

    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border-radius: 4px;
    max-width: 152px;

    & > option {
        height: 30px;
        background: #DFDFDF;
        padding-left: 12px;
    }
`


interface OptionType {
    value: any,
    name: string
}

interface Props {
    title: string,
    data: OptionType[],
    value: any,
    onValueChange : (value: any)=> void
}
const SelectInput = ({ title, data , value, onValueChange }: Props) => {

    const onValueChangeHandle = useCallback((event)=>{
        onValueChange(event.target.value)
    },[value])

    return <StyledWrapper>
        <StyledLabel>{title}*</StyledLabel>
        <StyledSelect value={value} 
            onChange={onValueChangeHandle}
        >
            {
                data.map(option => (
                    <option  key={option.value} value={option.value}>{option.name}</option>
                ))
            }
        </StyledSelect>
    </StyledWrapper>
}


export default SelectInput