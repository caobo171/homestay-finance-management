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
        <CheckinButton color= {'#BA1313'}/>
        <CheckinButton  color= {'#1ABA00'}/>
        <CheckinButton  color= {'#AE7D20'}/>
    </StyledWrapper>
}


export default GroupCheckinButton