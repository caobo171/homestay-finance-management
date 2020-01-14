import React from 'react'
import styled from 'styled-components'
import CheckinButton from './CheckinButton'


const StyledWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
`


const GroupCheckinButton = ()=>{
    return <StyledWrapper>
        <CheckinButton name = {'Breakfast'} color= {'#BA1313'} />
        <CheckinButton name = {'Lunch'} color= {'#1ABA00'}/>
        <CheckinButton  name ={'Dinner'} color= {'#AE7D20'}/>
    </StyledWrapper>
}


export default GroupCheckinButton