import React from 'react'
import styled from 'styled-components/macro'
import { useActivitiesByDate } from 'store/activity/hooks'
import { now } from 'service/helpers'

const StyledWrapper = styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 8px;
    padding-right: 12px;
    font-weight: 400;
    height: 36px;
    width: 80%;
    min-height: 36px;
    margin-top: 8px;

    cursor: pointer
`

const StyledIcon = styled.div`
    margin-right: 8px;
`

const StyledSpan = styled.span`

`

const StyledNumberIndicator = styled.div`
    background-color: orange;
    height: 24px;
    width: 24px;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
`

interface Props {
    name: string,
    icon: React.ElementType<any>,
    onSelect?: () => void,
    onSelectPage?: (name: string) => void,
    dismissMenu: () => void,
    todayActivitiesNumber?: number
}

const SidebarItem = ({
    name, icon, todayActivitiesNumber,
    onSelect, onSelectPage, dismissMenu
}: Props) => {
    const Icon = icon

    const onClickHandle = () => {
        onSelect && onSelect()

        onSelectPage && onSelectPage(name)

        dismissMenu()
    }
    return <StyledWrapper onClick={onClickHandle}>
        <StyledIcon>
            <Icon />
        </StyledIcon>
        <StyledSpan>{name}</StyledSpan>
        {(todayActivitiesNumber !== undefined && todayActivitiesNumber > 0) && (
            <StyledNumberIndicator>
                {todayActivitiesNumber}
            </StyledNumberIndicator>
        )}

    </StyledWrapper>
}


export default SidebarItem