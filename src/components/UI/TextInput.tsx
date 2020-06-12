import React from 'react'
import styled from 'styled-components/macro';

const SControl = styled.div`
    display: flex;
    flex-direction: column;
`

const SLabel = styled.label`
    margin: 8px 0px;
    
`

const SInput = styled.input`
    display: flex;
    padding: 10px 6px;
    justify-content: center;
    border-width: 0.5px 0.5px 0.5px 0.5px;
    border-color: #e3e3e3;
    border-radius: 4px;
    background: white;
    color: black;
`

interface Props {
    label: string,
    placeholder: string
}

const TextInput = React.memo(({label, placeholder}: Props)=>{
    return (<SControl>
        <SLabel>{label}</SLabel>
        <SInput  type={'text'} placeholder={placeholder}/>
    </SControl>)
})

export default TextInput;