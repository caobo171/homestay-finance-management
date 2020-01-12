import React from 'react'
import styled from 'styled-components'
import ItemPick from 'pages/Form/Itempicker/ItemPick'
import Item from './Item'


const StyledWrapper = styled.div`
    width: 90%;
`
const StyledHeader = styled.div`

`

const StyledItemPick = styled.div`

`
const ItemPicker = ()=>{
    return (
       <StyledWrapper>
           <StyledHeader>
               Chọn đồ *
           </StyledHeader>
            <Item/>
            <Item/>
            <Item/>
            <ItemPick/>
           
       </StyledWrapper>
    )   
}

export default ItemPicker