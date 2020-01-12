import React from 'react'
import UserGroup from '../UserGroup'
import styled from 'styled-components/macro'
import ItemImage from 'components/ItemImage'
import { CssVariable } from 'Constants'


const StyledWrapper = styled.div`
    height: 78px;
    justify-content: flex-start;

    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;

    font-weight: 500;
    color: ${CssVariable.TEXT_COLOR_H2};

    display: flex;
    flex-wrap : wrap;
`
const StyledRowItem = styled.div`
    display: flex;
    flex-basis: 480px;
    align-items: center;
    padding-left: 20px;
    flex-direction: row;
`

const StyledText = styled.div`
    align-items: center;
    margin-right: 16px;
`
const StyledSpan = styled.span`
    margin-left: 8px;
    margin-right: 16px;
`

const ActivityRow = () => {
    return <StyledWrapper>
        <StyledRowItem>
            <StyledText>
                Mua
            </StyledText>
            <ItemImage />
            <StyledSpan>Thịt lợn</StyledSpan>
            <StyledText>
                1kg
            </StyledText>
            <StyledText>
                500.000đ
            </StyledText>
        </StyledRowItem>
        <StyledRowItem>
            <StyledText>21/12/2019</StyledText>
            <StyledText>Influencer:</StyledText>
            <UserGroup />
        </StyledRowItem>

    </StyledWrapper>
}

export default ActivityRow