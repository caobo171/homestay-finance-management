import React from 'react';
import styled from 'styled-components';
import { openModal } from 'components/Modal';
import ActivitiesModal from 'components/ActivitiesModal';
import { useActivitiesByDate } from 'store/activity/hooks';


const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 92px;
    flex-direction: column;
    align-items: center;
    border: solid 0.5px rgba(98,98,98,0.1);

    cursor: pointer ;
    &:hover {
        background-color: rgba(256,165,0,0.2);
    }
`

const StyledSpan = styled.span`
    margin-top: 8px;
`

interface Props {
    date: Date
}

const DayItem = ({date}: Props)=>{

    const activities = useActivitiesByDate(date);

    const onClickDay = ()=>{
        if(activities.length > 0 ){
            openModal(<ActivitiesModal activities={activities}/>)
        }
        
    }

    return (
        <StyledWrapper onClick = {onClickDay}>
           <StyledSpan>{date.getDate() + '/' + (date.getMonth() + 1)}</StyledSpan> 
           {activities.length > 0 && (<StyledSpan> {activities.length} activities</StyledSpan>)} 
        </StyledWrapper>
    )
}

export default DayItem;