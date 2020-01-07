import React from 'react'
import styled from 'styled-components/macro'



// export default CalendarHeader


const HeaderItemWrapper = styled.div`
    display:flex;
    height: 40px;
    flex:1;
    flex-direction: column;
    max-height: 50px;
    align-items: center;
    justify-content: center;
`

const StyledDay = styled.div`

`

const StyledDate = styled.div`

`

const renderDay = (day: number) => {
    if (day === 7) return 'Chủ nhật'
    else {
        return `Thứ ${day + 1}`
    }
}

const renderDate = (day: number, today: number) => {
    let currentTime = new Date()
    currentTime.setDate(currentTime.getDate() - (day - today))
    return `${currentTime.getDate()}`.padStart(2, '0') + `/` + `${currentTime.getMonth()+1}`.padStart(2, '0');

}

interface Props {
    day: number,
    today: number
}

const HeaderItem = ({ day, today }: Props) => {
    return (
        <HeaderItemWrapper>
            <StyledDay>{renderDay(day)}</StyledDay>
            <StyledDate>{renderDate(today, day)}</StyledDate>
        </HeaderItemWrapper>
    )
}


export default HeaderItem