import React from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const ItemDetail = ()=>{
    return (
        <StyledWrapper>
            <ActivityRow/>
        </StyledWrapper>
    )
}

export default ItemDetail