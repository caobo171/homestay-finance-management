import React from 'react'
import styled from 'styled-components'
import ItemImage from 'components/ItemImage'
import { useItem } from 'store/item/hooks'
import { CssVariable } from 'Constants'
import { Activity, ActivityType } from 'store/activity/types'
import UserGroup from '../UserGroup'



const StyledWrapper = styled.div`
    font-size: 16px;
    width: 280px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #F6F6F6;

    align-items: center;

    border-radius: 4px;
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

    font-weight: 500;
`
const StyledSpan = styled.span`
    margin-left: 8px;
    margin-right: 8px;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: bold;
`
const StyledSmallText = styled.div`
    align-items: center;
    font-size: 14px;
    margin-right: 8px;
`
const StyledName = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    font-weight: 600;
    font-size: 20px;

    & > span {
        margin-left: 8px;
    }
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
interface Props {
    activity: Activity
}

const ActivityModal = ({ activity }: Props) => {

    const item = useItem(activity.item_id)

    return (<StyledWrapper>
        <StyledName>
            <ItemImage itemId={activity.item_id} />
            <span>  {activity.name} </span>
        </StyledName>
        <StyledRowItem>
            <StyledText>
                {renderActivity(activity.type)}
            </StyledText>

            <StyledSpan>{item.name}</StyledSpan>
            <StyledText>
                {activity.amount.toFixed(2)} {item ? item.unit : ''}
            </StyledText>
            <StyledText>
                {activity.cost.toFixed(0)}đ
                </StyledText>
        </StyledRowItem>
        <StyledRowItem>
            <StyledSmallText>
                {/* ({activity.name}) */}
                {formatDate(activity.time)}</StyledSmallText>
            {activity.influencers.length > 0 && <StyledSmallText>Influencer:</StyledSmallText>}
            <UserGroup userIds={activity.influencers} />
        </StyledRowItem>

    </StyledWrapper>
    )
}

export default ActivityModal