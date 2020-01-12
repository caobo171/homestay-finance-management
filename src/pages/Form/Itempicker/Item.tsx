import React from 'react'
import styled from 'styled-components'
import ItemImage from 'components/ItemImage'
import TrashIcon from 'icons/TrashIcon'


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
`
const StyledText = styled.div`
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    margin-left:8px;
`

const StyledTrash = styled(TrashIcon)`
    margin-right: 20px;
`
const Item = ()=>{
    return (
        <StyledWrapper>
            <ItemImage/>
            <StyledText>Thịt lợn</StyledText>

            <StyledText>0.2 kg</StyledText>
            <StyledTrash/>
        </StyledWrapper>
    )
}


export default Item