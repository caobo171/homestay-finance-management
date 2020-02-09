import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'
import UserInfo from './UserInfo'
import { useParams } from 'react-router-dom'
import { useUser } from 'store/user/hooks'
import { useActivitiesByUserId } from 'store/activity/hooks'
import { Activity, ActivityType } from 'store/activity/types'
import { formatMoney, countMoney } from 'service/helpers'
import Constants, { CssVariable } from 'Constants'
import ActivityFilter, { ActivityFilterType } from 'components/ActivityFilter'

//@ts-ignore
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import useBoolean from 'react-use/lib/useBoolean';
import AddActivityButton from 'components/AddActivityButton'

const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-right: 10px;
    margin-top: 10px;
    align-items: center;
`
const StyledDateTimeRangePicker = styled.div`

    span {
        display: none;
    }

    select {
        display: none;
    }

    input {
        display: none;
    }

    .react-datetimerange-picker__inputGroup {
        display:none;
    }

    .react-datetimerange-picker__clear-button {
        display: none;
    }

    margin-right: 14px;
`

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
`

const StyledActivityHeader = styled.div`
    font-weight: 700;
    font-size: 20px;

    color: ${CssVariable.PRIMARY_COLOR};


    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;
    
    padding: 10px 0px 20px 16px;
`

const StyledActivitiesWrapper = styled.div`
    width: 100%; 
    overflow-y: scroll;

    max-height: ${ Constants.IS_MOBILE ? 320 : 400}px;


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

const StyledAllButton = styled.div`
    color: #ffffff;
    background-color: orange;
    padding: 6px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledCost = styled.div<{ color?: string }>`
    flex: 1.4;
    display: flex;
    font-size: 24px;
    font-weight: 600;

    ${props => props.color && `
        color: ${props.color};
    `}
`

const StyledSpan = styled.span`
    margin-left: 32px;
    font-weight: 700;
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

const filterByDate = (startDate: Date, endDate: Date, activities: Activity[]) => {
    let rStartDate = startDate;
    rStartDate.setHours(0);
    let rEndDate = endDate;
    rEndDate.setHours(23);

    return activities.filter(act => {
        return act.time > rStartDate.getTime() && act.time < rEndDate.getTime();
    })

}


const filterData = (activities: Activity[], type: ActivityFilterType) => {
    if (type === ActivityFilterType.ALL) return activities
    return activities.filter(act => act.type.toString() === type.toString())
}

const UserDetail = () => {


    const [filter, toggleFilter] = useBoolean(false)

    const param = useParams<{ id: string }>()
    const user = useUser(param.id)


    const [date, setDate] = useState<[Date, Date]>([new Date(), new Date()])

    const onDateChangeHandle = (date: [Date, Date]) => {
        setDate(date)
    }
    const activities = useActivitiesByUserId(param.id)

    const [type, setType] = useState<ActivityFilterType>(ActivityFilterType.ALL)

    const filterActivities = filterData(activities, type);

    const displayData = useMemo(() => filter ?
        filterByDate(date[0], date[1], filterActivities) :
        filterActivities, [filter, filterActivities])



    const money = countMoney(displayData)

    return (<>
        {(user && user.id) && (
            <StyledWrapper>
                <ActivityFilter type={type} setType={setType} />
                <StyledHeader>
                    <UserInfo user={user} />


                    <StyledSpan>Chọn ngày: </StyledSpan>
                    <StyledDateTimeRangePicker>
                        <DateTimeRangePicker
                            value={date}
                            onChange={onDateChangeHandle}
                        ></DateTimeRangePicker>
                    </StyledDateTimeRangePicker>

                    <StyledAllButton onClick={toggleFilter}>
                        <span>{filter ? 'Filter' : 'All'}</span>
                    </StyledAllButton>
                </StyledHeader>


                <StyledActivityHeader>Activities</StyledActivityHeader>

                <StyledActivitiesWrapper>
                    {
                        displayData.map(act => {
                            return (
                                <ActivityRow key={act.id} activity={act} />
                            )
                        })
                    }
                </StyledActivitiesWrapper>

                {
                    (displayData.length >= 1) ? (
                        <StyledCountRow>
                            <StyledName>Còn:</StyledName>
                            <StyledCost
                                color={money > 0 ? Constants.red : Constants.green}
                            >{money > 0 && '+'}{formatMoney(money)}</StyledCost>
                        </StyledCountRow>
                    ) : (
                            <>
                                {displayData.length <= 0 && (
                                    <StyledNotFound>
                                        Không có dữ liệu
                                </StyledNotFound>
                                )}
                            </>
                        )
                }

                <AddActivityButton />
            </StyledWrapper>
        )}
    </>)
}

export default UserDetail