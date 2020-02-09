import React from 'react'
import HomeStay from 'store/homestay/types'
import styled from 'styled-components/macro'
import { CssVariable } from 'Constants'
import { openModal } from 'components/Modal'
import HomestayDetail from './Homestay/HomestayDetail'

interface Props {
    homestay: HomeStay
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;

    max-height: 300px;
    box-shadow: 0 8px 6px 1px rgba(0,0,0,0.2)
`

const StyledImage  = styled.img`
    flex: 1;
    height: 100%;
    width: 100%;
`

const StyledInfo = styled.div`
    flex: 1;
    padding: 8px 0px 12px 8px;
`

const StyledName = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    color: ${CssVariable.TEXT_COLOR_H1}
`

const StyledDescription = styled.div`
    font-size: 12px;
    color: ${CssVariable.TEXT_COLOR_H1_RGBA(.7)}
`
const HomeStayItem = ({homestay}: Props)=>{

    const onClickHandle = ()=>{
        openModal(<HomestayDetail homestay={homestay}/>)
    }
    return (
        <StyledWrapper>
            <StyledImage src={homestay.photoUrl}/>
            <StyledInfo onClick={onClickHandle}>
                <StyledName>{homestay.name}</StyledName>

                <StyledDescription>{homestay.description}</StyledDescription>
            </StyledInfo>
        </StyledWrapper>
    )
}

export default HomeStayItem