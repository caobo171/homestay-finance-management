import React, { useCallback } from 'react'
import  styled from 'styled-components/macro'


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 8px 8px 0px;
`
const StyledInput = styled.input`
    display: flex;
    flex: 2;
    border: none;
    background-color: #DFDFDF;
    border-radius: 4px;
    min-height: 28px;
    padding-left: 16px;
`
const StyledTextArea = styled.textarea`
    display: flex;
    flex: 2;
    border: none;
    background-color: #DFDFDF;
    border-radius: 4px;
    min-height: 60px;
    padding-left: 16px;
`

const StyledLabel = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 14px;
`
interface Props{
    value: string,
    setValue: (value:string) => void,
    label:string,
    type: 'text' | 'textarea'
}

const TextInput = ({value, setValue , label , type}: Props)=>{

    const  onValueChangeHandle = useCallback((e)=>{
        setValue(e.target.value)
    },[value])
    return (
        <StyledWrapper>
            <StyledLabel>{label}</StyledLabel>
            {
                !type || type=== 'text' ?  (
                    <StyledInput value={value} onChange={onValueChangeHandle}/>
                ) :(
                    <StyledTextArea value={value} onChange={onValueChangeHandle}/>
                )
            }
           
        </StyledWrapper>
    )

}

export default TextInput