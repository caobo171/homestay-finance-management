import React from 'react'
import CalendarHeader from './Calendar/Header'
import styled from 'styled-components'
import Calendar from './Calendar'
import GroupCheckinButton from './GroupCheckinButton'

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


const Checkin = ()=>{
    return <StyledWrapper>
         <StyledToday>Today</StyledToday>
         <StyledTime>Thứ 2</StyledTime>
         <StyledTime>31/12</StyledTime>
         <GroupCheckinButton/>
    </StyledWrapper>
}


export default Checkin