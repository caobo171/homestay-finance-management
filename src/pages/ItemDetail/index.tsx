import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'
import ItemInfo from './ItemInfo'
import { useParams } from 'react-router-dom'
import { useItem } from 'store/item/hooks'
import { useActivitiesByItemId } from 'store/activity/hooks'
import Constants, { CssVariable } from 'Constants'
import ActivityFilter, { ActivityFilterType } from 'components/ActivityFilter'
import NodataImage from 'icons/NodataImage'
import { Activity } from 'store/activity/types'
import NotFound from 'icons/NotFound'

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const StyledActivityHeader = styled.div`
    font-weight: 700;
    font-size: 20px;

    color: ${CssVariable.PRIMARY_COLOR};
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

const StyledNotFound = styled.div`
    margin: auto;
    margin-top: 70px;
    text-align : center ;
    padding: 10px;
    font-size : 26px;
    font-weight: 600;
    opacity: 0.6;
`

const filterData = (activities: Activity[], type: ActivityFilterType) => {
    if (type === ActivityFilterType.ALL) return activities
    return activities.filter(act => act.type.toString() === type.toString())
}

const ItemDetail = React.memo(() => {

    const param = useParams<{ id: string }>()
    const item = useItem(param.id)

    const [type, setType] = useState<ActivityFilterType>(ActivityFilterType.ALL)

    const activities = useActivitiesByItemId(param.id)

    const displayData = React.useMemo(()=>filterData(activities, type),[activities,type])
    return (
        <StyledWrapper>
            <ActivityFilter type={type} setType={setType} />
            <ItemInfo item={item} />
            <StyledActivityHeader>Activities</StyledActivityHeader>
            <StyledActivitiesWrapper>
                {
                    displayData.map(act => {
                        return (
                            <ActivityRow key={act.id} activity={act} type={'item'} />
                        )
                    })
                }
            </StyledActivitiesWrapper>
            {
                (displayData.length >= 1 && type === ActivityFilterType.ALL) ? (
                    <StyledCountRow>
                        <StyledName>Còn lại:</StyledName>
                        <StyledAmount
                            color={item.remain > 0 ? Constants.green : Constants.red}
                        >
                            {item.remain.toFixed(2)} {item ? item.unit : ''}
                        </StyledAmount>
                    </StyledCountRow>
                ) : (<>
                            {displayData.length <= 0 && (
                                <StyledNotFound>
                                    Không có dữ liệu
                                </StyledNotFound>
                            )}
                        </>)
            }
        </StyledWrapper>
    )
})

export default ItemDetail