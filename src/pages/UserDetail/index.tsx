import React from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'
import UserInfo from './UserInfo'
import { useParams } from 'react-router-dom'
import { useUser } from 'store/user/hooks'
import { useActivitiesByUserId } from 'store/activity/hooks'
import { Activity, ActivityType } from 'store/activity/types'
import { formatMoney } from 'service/helpers'
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
    
    padding: 10px 0px 20px 16px;
`

const StyledActivitiesWrapper = styled.div`
    width: 100%; 
    overflow-y: scroll;

    max-height: 400px;


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

const StyledCost = styled.div<{ color?: string }>`
    flex: 1.4;
    display: flex;
    font-size: 24px;
    font-weight: 600;

    ${props => props.color && `
        color: ${props.color};
    `}
`

const countMoney = (activities: Activity[]) => {
    let cost = 0;
    for (let i = 0; i < activities.length; i++) {
        const act = activities[i]
        const lengthInfluencers = act.influencers.length
        switch (act.type) {
            case ActivityType.BUY:
                cost = cost - act.cost
                break;
            case ActivityType.PAY:
                cost = cost - act.cost
                break;
            case ActivityType.DESTROY:
                cost = cost + (lengthInfluencers > 0 ? act.cost / lengthInfluencers : act.cost)
            case ActivityType.USE:
                cost = cost + (lengthInfluencers > 0 ? act.cost / lengthInfluencers : act.cost)
        }
    }

    return cost
}

const UserDetail = () => {

    const param = useParams<{ id: string }>()
    const user = useUser(param.id)

    const activities = useActivitiesByUserId(param.id)

    const money = countMoney(activities)
    return (<>
        {(user && user.id) && (
            <StyledWrapper>
                <UserInfo user={user} />
                <StyledActivityHeader>Activities</StyledActivityHeader>

                <StyledActivitiesWrapper>
                    {
                        activities.map(act => {
                            return (
                                <ActivityRow key={act.id} activity={act} />
                            )
                        })
                    }
                </StyledActivitiesWrapper>

                {
                    activities.length > 0 && (
                        <StyledCountRow>
                            <StyledName>Còn:</StyledName>
                            <StyledCost
                                color={money > 0 ? Constants.red : Constants.green}
                            >{money > 0 && '+'}{formatMoney(money)}</StyledCost>
                        </StyledCountRow>
                    )
                }


            </StyledWrapper>
        )}
    </>)
}

export default UserDetail