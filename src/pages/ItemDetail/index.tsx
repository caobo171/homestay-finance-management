import React from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'
import UserInfo from './UserInfo'

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const StyledActivityHeader = styled.div`
    margin-left: 16px;
    weight: 400;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
`

const ItemDetail = ()=>{
    return (
        <StyledWrapper>
            <UserInfo />
            <StyledActivityHeader>Activities</StyledActivityHeader>
            <ActivityRow/>
            <ActivityRow/>
            <ActivityRow/>
            <ActivityRow/>

        </StyledWrapper>
    )
}

export default ItemDetail