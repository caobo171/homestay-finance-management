import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { formRef } from 'service/FormRefContext'

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

const StyledInput = styled.input`
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
    max-width: 140px;
`

interface Props{
    title: string,
    type?: 'text'|'number',
    value: any,
    onValueChange : (value:any)=>void ,
}

const TextInput = ({title , type ,value, onValueChange}: Props)=>{

    const ref = useRef<HTMLInputElement>(null)
    const onValueChangeHandle = useCallback((event)=>{
        onValueChange( type && type==='number' ? Number(event.target.value): event.target.value)
    },[value])
    return <StyledWrapper>
        <StyledLabel>{title}*</StyledLabel>
        <StyledInput 
        ref = {ref}
        onFocus={
            ()=>{
                if(formRef && formRef.current  && ref && ref.current){

                    const formRefBottom = formRef.current.getBoundingClientRect().bottom
                    const refTop = ref.current.getBoundingClientRect().top
                    if(window.innerWidth <= 600){
                        formRef.current.style.marginTop = `${formRefBottom - refTop - 100}px`
                    }
                }
            }
        }
        onChange={onValueChangeHandle}
        value={value}
        type={type? type: 'text'}/>
    </StyledWrapper>
}


export default TextInput