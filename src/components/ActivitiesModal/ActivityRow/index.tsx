import React from 'react'
import styled from 'styled-components/macro'
import ItemImage from 'components/ItemImage'
import Constants, { CssVariable } from 'Constants'
import { Activity, ActivityType } from 'store/activity/types'
import { useItem } from 'store/item/hooks'
import { formatMoney } from 'service/helpers'


const StyledWrapper = styled.div`
    justify-content: flex-start;

    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;

    font-weight: 450;
    color: ${CssVariable.TEXT_COLOR_H2};

    display: flex;
    padding: 8px 0px 14px 14px;
    flex-wrap : wrap;
`
const StyledRowItem = styled.div`
    display: flex;
    flex-basis: 480px;
    align-items: center;
    flex-direction: row;
`

const StyledText = styled.div<{ flex?: number, color?: string }>`
    align-items: center;
    display: flex;
    flex-direction:row;

    ${props => props.flex && `
        flex: ${props.flex} ;
    ` }

    ${props => props.color && `
        color: ${props.color} ;
    ` }
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
    activity: Activity,
    type?: 'item' | 'user'
}

const renderActivity = (type: ActivityType) => {
    switch (type) {
        case ActivityType.BUY:
            return 'Mua'
        case ActivityType.DESTROY:
            return 'Hủy'
        case ActivityType.USE:
            return 'Dùng'
        case ActivityType.PAY:
            return 'Trả Tiền'
    }
}



const ActivityRow = ({ activity, type }: Props) => {

    const item = useItem(activity.item_id)

    return <StyledWrapper>
        <StyledRowItem>
            <StyledText flex={1}>
                {renderActivity(activity.type)}
            </StyledText>
            <StyledText flex={2.6}>
                {
                    activity.type !== ActivityType.PAY && (
                        <>
                            <ItemImage itemId={activity.item_id} size={'very_small'} />
                            <StyledSpan>{item.name}</StyledSpan>
                        </>
                    )
                }

            </StyledText>
            <StyledText flex={1.2} color={
                activity.type === ActivityType.PAY || activity.type === ActivityType.BUY ?
                    Constants.green :
                    Constants.red
            }>
                {(activity.type === ActivityType.PAY || activity.type === ActivityType.BUY) ?
                    '+' : '-'}{activity.amount.toFixed(2)} {item ? item.unit : ''}

            </StyledText>

            <StyledText flex={1.2} color={
                activity.type === ActivityType.PAY || activity.type === ActivityType.BUY ?
                    Constants.green :
                    Constants.red
            }>
                {
                    type === 'item' ? (<>
                        {(activity.type === ActivityType.PAY || activity.type === ActivityType.BUY) ? '+' : '-'}{activity.amount.toFixed(2)} {item ? item.unit : ''}
                    </>) : (<>
                        {(activity.type === ActivityType.PAY || activity.type === ActivityType.BUY) ? '-' : '+'}
                        {formatMoney(activity.cost)}
                    </>)
                }
            </StyledText>
        </StyledRowItem>
    </StyledWrapper>
}

export default ActivityRow