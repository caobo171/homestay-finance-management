import React, { useState } from 'react'
import styled from 'styled-components';
import ActivityRow from './ActivityRow';
import { Activity } from 'store/activity/types';
import ActivityGroupRow from './ActivityGroupRow';
import { formatMoney, countMoney } from 'service/helpers';
import UserGroup from 'components/UserGroup';
import Constants from 'Constants';


const StyledWrapper = styled.div`
    width: ${window.innerWidth * (Constants.IS_MOBILE ? 1 : 0.8)}px;
    height: ${window.innerHeight * (0.8)}px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
`

const StyledGroup = styled.div`
    flex: 1;
    ${!Constants.IS_MOBILE && `padding-left: 20px;`}
`

const StyledHeader = styled.h3``

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${!Constants.IS_MOBILE && `padding: 12px;`}

`
const StyledLabel = styled.span`
    flex: 1;
    color: orange;
    text-transform: uppercase;
    font-weight:bold;
`

const StyledValue = styled.div`
    flex: 2;
`

const StyledActivitiesWrapper = styled.div`
    width: 100%; 
    overflow-y: scroll;
    
    max-height: ${Constants.IS_MOBILE ? 320: 450 }px;

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

const StyledInfoWrapper = styled.div`
    width: 100%;
    flex: 1;
    padding-top: 24px;
    background-color: rgba(255,179,66,0.1);
`

interface Props {
    activities: Activity[]
}

export interface ActivityGroup {
    name: string,
    activities: Activity[],
    influencers: string[],
    userId: string
}

const groupActivitys = (activities: Activity[]) => {

    let groups: {
        [key: string]: Activity[]
    } = {}

    activities.forEach((act) => {
        let listActivities = groups[act.name] ? groups[act.name] : []
        listActivities.push(act)

        groups[act.name] = listActivities
    })


    let activityGroups: ActivityGroup[] = []
    const keys = Object.keys(groups);


    for (let i = 0; i < keys.length; i++) {
        activityGroups.push({
            name: keys[i],
            activities: groups[keys[i]],
            influencers: groups[keys[i]][0].influencers,
            userId: groups[keys[i]][0].user_id
        })
    }

    return activityGroups;
}

const ActivitiesModal = ({ activities }: Props) => {


    const activityGroups = groupActivitys(activities)

    const [group, setGroup] = useState<ActivityGroup>(activityGroups[0])

    const money = countMoney(group.activities) * (group.influencers.length > 0 ? group.influencers.length : 1);
    return (
        <StyledWrapper>

            <StyledGroup>
                <StyledHeader>Hành động</StyledHeader>
                <StyledActivitiesWrapper>
                    {
                        activityGroups.map(group => {
                            return (
                                <ActivityGroupRow
                                    setGroup={setGroup} key={group.name} activityGroup={group} />
                            )
                        })
                    }
                </StyledActivitiesWrapper>
            </StyledGroup>


            <StyledInfoWrapper>
                <StyledActivitiesWrapper>
                    {
                        group.activities.map(act => {
                            return (
                                <ActivityRow key={act.id} activity={act} />
                            )
                        })
                    }
                </StyledActivitiesWrapper>

                <StyledRow>
                    <StyledLabel>
                        Tỏng tiền:
                    </StyledLabel>
                    <StyledValue>
                        {money > 0 && '+'}{formatMoney(money)}
                    </StyledValue>
                </StyledRow>
                <StyledRow>
                    <StyledLabel>
                        Người dùng:
                    </StyledLabel>
                    <StyledValue>
                        <UserGroup userIds={
                            group.influencers.length > 0 ?
                                group.influencers :
                                [group.userId]} />
                    </StyledValue>
                </StyledRow>

            </StyledInfoWrapper>
        </StyledWrapper>
    )
}


export default ActivitiesModal