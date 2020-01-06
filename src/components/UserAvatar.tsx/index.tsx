import React from 'react'
import styled from 'styled-components/macro'

const DEFAULT_IMAGE = 'https://data-gcdn.basecdn.net/avatar/sys1/8e/ca/f6/00/20/504d5bda87c57c66b1a1fe2e52c0dad8/0.caonguyen_1.jpg'


const StyledWrapper = styled.div`
    height: 40px;
    width: 40px;

`

const StyledImage = styled.img`
    border-radius : 50%;
    height: 100%;
    width: 100%;
`

const UserAvatar = ()=>{

    return (
        <StyledWrapper>
            <StyledImage  src={DEFAULT_IMAGE}/>
        </StyledWrapper>
    )

}


export default UserAvatar