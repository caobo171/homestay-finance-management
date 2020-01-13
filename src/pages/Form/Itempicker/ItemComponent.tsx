import React, { useCallback } from 'react'
import styled from 'styled-components'
import ItemImage from 'components/ItemImage'
import TrashIcon from 'icons/TrashIcon'
import { PickedItemType } from '.'


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;

    margin-left: 8px;
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

interface Props {
    item: PickedItemType
    onRemoveItem : (itemId: string)=>void
}
const ItemComponent = React.memo(({ item , onRemoveItem }: Props) => {

    const onRemoveHandle = useCallback(()=>{
        onRemoveItem(item.item.id)
    },[item])
    return (
        <StyledWrapper>
            <ItemImage itemId={item.item.id} size={'very_small'} />
            <StyledText>{item.item.name}</StyledText>
            <StyledText>1/{item.pickAmount} ({item.item.remain.toFixed(2)}{item.item.unit}) </StyledText>
            <StyledTrash  onClick={onRemoveHandle}/>
        </StyledWrapper>
    )
},(prev, next)=> prev.item.item.id === next.item.item.id)


export default ItemComponent