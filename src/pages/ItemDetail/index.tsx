import React from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'
import ItemInfo from './ItemInfo'
import { useParams } from 'react-router-dom'
import { useItem } from 'store/item/hooks'
import { useActivitiesByItemId } from 'store/activity/hooks'

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const StyledActivityHeader = styled.div`
    weight: 400;
    font-size: 20px;


    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;
    
    padding: 30px 0px 16px 16px;
`
const ItemDetail = React.memo(() => {

    const param = useParams<{ id: string }>()
    const item = useItem(param.id)


    const activities = useActivitiesByItemId(param.id)
    return (
        <StyledWrapper>
            <ItemInfo item={item} />
            <StyledActivityHeader>Activities</StyledActivityHeader>
            {
                activities.map(act => {
                    return (
                        <ActivityRow key={act.id} activity={act} />
                    )
                })
            }

        </StyledWrapper>
    )
})

export default ItemDetail