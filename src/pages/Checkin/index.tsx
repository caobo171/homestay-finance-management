import React from 'react'
import CalendarHeader from './Calendar/Header'
import styled from 'styled-components'
import { now } from 'service/helpers'

import CreateActivityButton from 'components/Sidebar/CreateActivityButton'

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

const StyledDiv = styled.div`
    width: 60%;
    padding-left: 20px;
    margin-top: 30px;
`


const getDay = () => {
    const today = new Date(now())
    if (today.getDay() === 7) return 'Chủ nhật'
    return `Thứ ${today.getDay() + 1}`
}

const getDate = () => {
    const today = new Date(now());
    const date = `${today.getDate()}`.padStart(2, '0')
    const month = `${today.getMonth() + 1}`.padStart(2, '0')
    return `${date}/${month}`
}


const Checkin = () => {
    return <StyledWrapper>
        <StyledToday>Today</StyledToday>
        <StyledTime>{getDay()}</StyledTime>
        <StyledTime>{getDate()}</StyledTime>

        <StyledDiv>
            <CreateActivityButton />
        </StyledDiv>

        {/* <GroupCheckinButton/> */}
    </StyledWrapper>
}


export default Checkin