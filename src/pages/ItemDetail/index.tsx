import React from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'
import ItemInfo from './ItemInfo'
import { useParams } from 'react-router-dom'
import { useItem } from 'store/item/hooks'
import { useActivitiesByItemId } from 'store/activity/hooks'
import Constants from 'Constants'

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

const StyledActivitiesWrapper = styled.div`
    width: 100%; 
    overflow-y: scroll;

    max-height: 320px;

    &::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1); 
    }
`

const StyledCountRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
`

const StyledName = styled.div`
    flex: 1.4;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    margin-right: 40px;
    justify-content: flex-end;
`

const StyledAmount = styled.div<{ color?: string }>`
    flex: 1.4;
    display: flex;
    font-size: 24px;
    font-weight: 600;

    ${props => props.color && `
        color: ${props.color};
    `}
`
const ItemDetail = React.memo(() => {

    const param = useParams<{ id: string }>()
    const item = useItem(param.id)
    console.log(param.id)

    const activities = useActivitiesByItemId(param.id)
    return (
        <StyledWrapper>
            <ItemInfo item={item} />
            <StyledActivityHeader>Activities</StyledActivityHeader>
            <StyledActivitiesWrapper>
                {
                    activities.map(act => {
                        return (
                            <ActivityRow key={act.id} activity={act} type={'item'} />
                        )
                    })
                }
            </StyledActivitiesWrapper>
            {
                activities.length > 1 && (
                    <StyledCountRow>
                        <StyledName>Còn lại:</StyledName>
                        <StyledAmount
                            color={item.remain > 0 ? Constants.green : Constants.red}
                        >
                            {item.remain.toFixed(2)} {item ? item.unit : ''}
                        </StyledAmount>
                    </StyledCountRow>
                )
            }
        </StyledWrapper>
    )
})

export default ItemDetail