import React from 'react'
import styled from 'styled-components'
import Column from './Column'

const StyledWrapper = styled.div`
    height:  600px;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const Calendar = () => {
    const today = (new Date()).getDay()
    return (
        <StyledWrapper>
            {[1, 2, 3, 4, 5, 6, 7].map((day: number) => {
                return <Column key={day} day={day} today={today} />
            })}
        </StyledWrapper>
    )
}


export default Calendar