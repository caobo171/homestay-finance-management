import React from 'react'
import CalendarHeader from './Calendar/Header'
import styled from 'styled-components'
import Calendar from './Calendar'

const StyledWrapper = styled.div`
    width: 80%;
    display: flex;
`

const Checkin = ()=>{
    return <StyledWrapper>
        <Calendar/>
    </StyledWrapper>
}


export default Checkin