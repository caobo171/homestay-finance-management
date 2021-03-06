import React from 'react'
import styled from 'styled-components'
import Constants from 'Constants'

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;

    margin: 12px 0px 6px 0px;
    flex-direction: row;
    align-items: center;

    font-size: ${Constants.LABEL_FONTSIZE}px;
`

const StyledLabel = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledFileInput = styled.input`
    height: ${Constants.INPUT_HEIGHT}px;
    flex: 1.5;
    border: none;
    background: #DFDFDF;
    padding-left: 12px;
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border-radius: 4px;
    max-width: ${Constants.MAX_INPUT_WIDTH}px;
`

interface Props{
    title: string,
    onValueChange : (file: File)=>void
}

const ImagePicker = ({title, onValueChange}: Props)=>{

    const onChangeHandle = (event:any)=>{
            if(event.target.files && event.target.files.length > 0 ){
                onValueChange(event.target.files[0])
            }
            
            
    }
    return <StyledWrapper>
        <StyledLabel>{title}</StyledLabel>
        <StyledFileInput type="file" accept="image/*" onChange ={onChangeHandle} />
    </StyledWrapper>
}


export default ImagePicker