import React from 'react'
import styled from 'styled-components'
import * as firebase from 'firebase'

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
        <StyledWrapper color={color} onClick={async()=>{
            const provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider).then(result=>{
              console.log(result)
            })
        }}>
            Morning
        </StyledWrapper>
    )
}

export default CheckinButton