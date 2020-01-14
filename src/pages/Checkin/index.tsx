import React from 'react'
import CalendarHeader from './Calendar/Header'
import styled from 'styled-components'
import Calendar from './Calendar'
import GroupCheckinButton from './GroupCheckinButton'
import { now } from 'service/helpers'

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledToday = styled.div`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 28px;
    margin-top: 100px;
`

const StyledTime = styled.div`
    font-size: 32px;
    font-weight: bold;
`

const getDay = ()=>{
    const today  = new Date(now())
    if(today.getDay() === 7 ) return 'Chủ nhật'
    return `Thứ ${today.getDay()+1}`
}

const getDate = ()=>{
    const today  = new Date(now());
    const date = `${today.getDate()}`.padStart(2,'0')
    const month = `${today.getMonth()+1}`.padStart(2,'0')
    return `${date}/${month}`
}

const Checkin = ()=>{
    return <StyledWrapper>
         <StyledToday>Today</StyledToday>
         <StyledTime>{getDay()}</StyledTime>
         <StyledTime>{getDate()}</StyledTime>
         <GroupCheckinButton/>
    </StyledWrapper>
}


export default Checkin