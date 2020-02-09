import React from 'react'
import { ActivityGroup } from '..'
import styled from 'styled-components';
import UserAvatar from 'components/UserAvatar';
import Constants from 'Constants';


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;

    padding:5px;

    cursor: pointer;

    &:hover {
        background-color: rgba(58,58,58,0.1);
    }
`

const StyledRowItem = styled.div<{ flex: number }>`
    flex: ${props => props.flex};
`

interface Props {
    activityGroup: ActivityGroup,
    setGroup: (group: ActivityGroup) => void
}

const ActivityGroupRow = ({ activityGroup, setGroup }: Props) => {

    const onClickHandle = () => {
        setGroup(activityGroup);
    }
    return (
        <StyledWrapper onClick={onClickHandle}>


            {!Constants.IS_MOBILE && <StyledRowItem flex={1}>
                <UserAvatar userId={activityGroup.userId} />
            </StyledRowItem>}

            <StyledRowItem flex={3}>
                <span>{activityGroup.name}</span>
            </StyledRowItem>
        </StyledWrapper>
    )
}

export default ActivityGroupRow;