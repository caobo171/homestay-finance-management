import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div<{color: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    width: 92px;
    font-size: 16px;
    color: #ffffff;
    background-color: ${props=> props.color};
    border-radius: 50px;

    &:hover {
        opacity: 0.5;
    }
`

interface Props {
    color: string
}

const CheckinButton = ({color}: Props)=>{
    return (
        <StyledWrapper color={color}>
            Morning
        </StyledWrapper>
    )
}

export default CheckinButton