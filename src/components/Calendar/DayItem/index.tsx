import React from 'react';
import styled from 'styled-components';
import { openModal } from 'components/Modal';
import ActivitiesModal from 'components/ActivitiesModal';
import { useActivitiesByDate } from 'store/activity/hooks';
import Constants from 'Constants';
import { isToday } from 'service/helpers';


const StyledWrapper = styled.div<{active:boolean}>`
    width: 100%;
    display: flex;
    height: ${Constants.IS_MOBILE ? 60: 92}px;
    flex-direction: column;
    align-items: center;
    border: solid 0.5px rgba(98,98,98,0.1);

    ${props=> props.active && `background-color: rgba(66, 135, 245, 0.1);`}

    cursor: pointer ;
    &:hover {
        background-color: rgba(256,165,0,0.2);
    }
`

const StyledSpan = styled.span`
    margin-top: 8px;
`

const StyledActivitySpan = styled.span`
    background-color: orange;
    color: #ffffff;
    border-radius: 12px;
    padding: 5px;
`

interface Props {
    date: Date
}

const DayItem = ({date}: Props)=>{

    const activities = useActivitiesByDate(date);

    const active = isToday(date)

    const onClickDay = ()=>{
        if(activities.length > 0 ){
            openModal(<ActivitiesModal activities={activities}/>)
        }   
    }

    return (
        <StyledWrapper onClick = {onClickDay} active = {active}>
           <StyledSpan>{date.getDate() + '/' + (date.getMonth() + 1)}</StyledSpan> 
           {activities.length > 0 && (<StyledActivitySpan> {activities.length} {!Constants.IS_MOBILE && 'hành động'}</StyledActivitySpan>)} 
        </StyledWrapper>
    )
}

export default DayItem;