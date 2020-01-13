import React from 'react'
import styled from 'styled-components/macro'
import { useItem } from 'store/item/hooks'
import { DEFAULT_ITEM_IMAGE } from 'store/item/function'


const StyledWrapper = styled.div<{ size: undefined | 'very_small' | 'small' }>`
    height: 32px;
    width: 32px;
    ${props => props.size === 'very_small' && `
        height: 20px;
        width: 20px;
    `}

`

const StyledImage = styled.img`
    border-radius : 50%;
    height: 100%;
    width: 100%;
`

interface Props {
    itemId: string,
    size?: 'very_small' | 'small'
}


const ItemImage = React.memo(({ itemId, size }: Props) => {

    const item = useItem(itemId)

    return (
        <StyledWrapper size={size}>
            <StyledImage src={item.photoUrl ? item.photoUrl : DEFAULT_ITEM_IMAGE} />
        </StyledWrapper>
    )

})


export default ItemImage