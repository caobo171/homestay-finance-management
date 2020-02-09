import React from 'react';

import styled from 'styled-components';

const StyledImage = styled.img`
    width: ${window.innerWidth *0.8}px;
    heigh: ${window.innerWidth *0.8}px;
`

interface Props{
    uri: string
}

const ImageModal = ({uri}: Props)=>{
    return (
        <StyledImage src = {uri}/>
    )
}


export default ImageModal