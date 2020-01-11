import React from 'react'
import styled from 'styled-components/macro'
import HeaderItem from './Header'


const StyledWrapper = styled.div`
    height: 100%;
    display: flex;
    flex:1 ;
    flex-direction: column;
    border: solid 1px #000000;
`


interface Props {
    day: number,
    today: number
}

interface Props {
    day: number,
    today: number
}


const Column = ({ day, today }: Props) => {
    return (
        <StyledWrapper>
            <HeaderItem day={day} today={today}/>
        </StyledWrapper>
    )
}


export default Column


const SectionWrapper = styled.div`

`

const MembersSection = ()=>{

}