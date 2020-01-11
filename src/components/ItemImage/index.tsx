import React from 'react'
import styled from 'styled-components/macro'

const DEFAULT_IMAGE = 'https://media.suckhoedoisong.vn/Images/haiyen/2019/12/02/thit_lon.jpg'


const StyledWrapper = styled.div`
    height: 32px;
    width: 32px;

`

const StyledImage = styled.img`
    border-radius : 50%;
    height: 100%;
    width: 100%;
`

const ItemImage = ()=>{

    return (
        <StyledWrapper>
            <StyledImage  src={DEFAULT_IMAGE}/>
        </StyledWrapper>
    )

}


export default ItemImage