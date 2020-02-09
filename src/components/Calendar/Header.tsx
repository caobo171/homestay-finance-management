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

    padding-top: 10px;
    padding-bottom: 10px;
    background-color: rgba(58,58,58,0.2);
`

const StyledDay = styled.div`

`

const renderDay = (day: number) => {
    if (day === 0) return 'Chủ nhật'
    else {
        return `Thứ ${day +1 }`
    }
}



interface Props {
    day: number
}

const HeaderItem = ({ day }: Props) => {
    return (
        <HeaderItemWrapper>
            <StyledDay>{renderDay(day)}</StyledDay>
        </HeaderItemWrapper>
    )
}


export default HeaderItem