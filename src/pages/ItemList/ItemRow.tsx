import React, { useCallback } from 'react'
import styled from 'styled-components'
import Item from 'store/item/types'
import ItemImage from 'components/ItemImage'
import Constants, { CssVariable } from 'Constants'
import { AppRouterContext } from 'navigation/AppRouter'
import { formatMoney } from 'service/helpers'
import UserGroup from 'components/UserGroup'
import { useUser } from 'store/user/hooks'

const Wrapper = styled.div`
    height: 78px;
    justify-content: flex-start;

    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;
    
    font-weight: 500;
    color: ${CssVariable.TEXT_COLOR_H2};

    display: flex;
    flex-wrap : wrap;

`

const StyledRowItem = styled.div`
    display: flex;
    flex-basis: 480px;
    align-items: center;
    padding-left: 20px;
    flex-direction: row;
`

const StyledImage = styled.img`
    height: 30px;
    border-radius: 50%;
    margin-left: 20px;
`

const StyledName = styled.span`
    margin-left: 8px;
    font-size: 16px;
`

const StyledText = styled.span`
    font-size: 16px;
`

interface Props {
    item: Item
}

const ItemRow = React.memo(({ item }: Props) => {

    const onClickHandle = useCallback(()=>{
        AppRouterContext.ref.props.history.push(`/item/${item.id}`)
    },[item.id])

    const user = useUser(item.userId)
    return <Wrapper onClick={onClickHandle }>
        <StyledRowItem>
            <ItemImage itemId={item.id}/>
            <StyledName>{item.name}</StyledName>
        </StyledRowItem>
        <StyledRowItem>
<StyledText>-Còn: {item.remain.toFixed(2)} {item.unit} ({formatMoney(item.remain/item.amount * item.cost)})  {!Constants.IS_MOBILE &&`-Total: ${formatMoney(item.cost)} `}<StyledImage src={user.photoURL}></StyledImage></StyledText>


        </StyledRowItem>
        <StyledRowItem>
        </StyledRowItem>
    </Wrapper>
},(prev,next)=> prev.item.id === next.item.id)

export default ItemRow;