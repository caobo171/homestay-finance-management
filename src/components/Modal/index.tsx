import React from 'react'
import styled from 'styled-components'

const  StyledWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    
    z-index: 3;

    display:flex;
    align-items: center;
    justify-content: center;
`

interface Props {
    component: React.ElementType<any>
}

const Modal = ({component}: Props)=>{

    const Component = component
    return (
        <StyledWrapper>
            <Component/>
        </StyledWrapper>
    )
}

export default Modal 