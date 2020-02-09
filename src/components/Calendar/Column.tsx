import React from 'react'
import styled from 'styled-components/macro'
import HeaderItem from './Header'
import DayItem from './DayItem'


const StyledWrapper = styled.div`
    height: 100%;
    display: flex;
    flex:1 ;
    flex-direction: column;
`


interface Props {
    day: number
}

interface Props {
    day: number,
    days: Date[]
}


const Column = ({ day , days }: Props) => {
    return (
        <StyledWrapper>
            <HeaderItem day={day} />
            {
                days.map(date => {
                    return <DayItem key={date.getDate()} date = {date}/>
                })
            }
        </StyledWrapper>
    )
}


export default Column


const SectionWrapper = styled.div`

`

const MembersSection = ()=>{

}