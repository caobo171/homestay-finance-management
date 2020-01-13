import React from 'react'
import UserGroup from '../UserGroup'
import styled from 'styled-components/macro'
import ItemImage from 'components/ItemImage'
import { CssVariable } from 'Constants'
import { Activity, ActivityType } from 'store/activity/types'
import { useItem } from 'store/item/hooks'
import { openModal } from 'components/Modal'
import ActivityModal from './ActivityModal'
import { formatMoney } from 'service/helpers'


const StyledWrapper = styled.div`
    height: 78px;
    justify-content: flex-start;

    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;

    font-weight: 450;
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

const StyledText = styled.div`
    align-items: center;
    margin-right: 8px;
`
const StyledSpan = styled.span`
    margin-left: 8px;
    margin-right: 8px;
    text-transform: capitalize;
    font-weight: 600;
`
const StyledSmallText = styled.div`
    align-items: center;
    font-size: 12px;
    margin-right: 8px;
`

interface Props {
    activity: Activity
}

const renderActivity = (type: ActivityType) => {
    switch (type) {
        case ActivityType.BUY:
            return 'Mua'
        case ActivityType.DESTROY:
            return 'Hủy'
        case ActivityType.USE:
            return 'Dùng'
    }
}

const formatDate = (time: number) => {
    const date = new Date(time)
    const day = `${date.getDate()}`.padStart(2, '0')
    const month = `${date.getMonth() + 1}`.padStart(2, '0')
    const year = `${date.getFullYear()}`

    return `${day}/${month}/${year}`
}

const ActivityRow = ({ activity }: Props) => {

    const item = useItem(activity.item_id)

    return <StyledWrapper onClick ={()=>{
        openModal(<ActivityModal activity={activity}/>)
    }}>
        <StyledRowItem>
            <StyledText>
                {renderActivity(activity.type)}
            </StyledText>
            <ItemImage itemId={activity.item_id} size={'very_small'}/>
            <StyledSpan>{item.name}</StyledSpan>
            {/* <StyledText>
                {activity.amount.toFixed(2)} {item ? item.unit : ''}
            </StyledText> */}
            <StyledText>
                {formatMoney(activity.cost)}
            </StyledText>

            <StyledSmallText>
                {/* ({activity.name}) */}
            ({formatDate(activity.time)})</StyledSmallText>
        </StyledRowItem>
        {/* <StyledRowItem>
           
            {activity.influencers.length > 0 && <StyledSmallText>Influencer:</StyledSmallText>}
            <UserGroup userIds={activity.influencers} />
        </StyledRowItem> */}

    </StyledWrapper>
}

export default ActivityRow