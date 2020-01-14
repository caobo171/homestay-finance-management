import React from 'react'
import styled from 'styled-components'


const StyledWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    
`

const LoadingComponent = () => {

    return (
        <StyledWrapper>
            <img src={require('icons/loading.gif')} />
        </StyledWrapper>
    )

}


export default LoadingComponent;