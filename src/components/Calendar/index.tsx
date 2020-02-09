import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { now, getDaysInMonth } from 'service/helpers';
import Column from './Column';

const StyledCalendarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledWrapper = styled.div`
    width: 100%;
`

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-around;
    margin-bottom: 28px;
    background-color: rgba(256,165,0,0.5);
    color: #ffffff;
    border-radius: 15px;
    padding: 5px;
`

const StyledSpan  = styled.span`

    cursor:pointer;
`

const Calendar = () => {


    const [date, setDate] = useState<Date>(new Date(now()))
    const days = getDaysInMonth(date)

    const minusMonth = useCallback(()=>{
        let cloneDate = new Date(date);
        cloneDate.setMonth(cloneDate.getMonth()-1)
        setDate(cloneDate)
    },[date])


    const plusMonth = useCallback(()=>{
        let cloneDate = new Date(date);
        cloneDate.setMonth(cloneDate.getMonth()+1)
        setDate(cloneDate)
    },[date])

    return (
        <StyledWrapper>
            <StyledHeader>
                <StyledSpan onClick={minusMonth}>&#x2B05;</StyledSpan>
                <span >Tháng {date.getMonth()+1}/{date.getFullYear()}</span>
                <StyledSpan onClick={plusMonth}>&#x27A1;</StyledSpan>
            </StyledHeader>
            <StyledCalendarWrapper>

                {[1, 2, 3, 4, 5, 6 , 0].map((day: number) => {
                    return <Column key={day} day={day}
                        days={days.filter(e => e.getDay() === day)} />
                })}
            </StyledCalendarWrapper>
        </StyledWrapper>

    )
}

export default Calendar;