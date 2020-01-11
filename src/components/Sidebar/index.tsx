import React from 'react'
import styled from 'styled-components/macro'
import SidebarItem from './SidebarItem'
import UserInfo from './UserInfo'
import CreateActivityButton from './CreateActivityButton';
import HumanIcon from 'icons/HumanIcon';
import DirectoryIcon from 'icons/DirectoryIcon';
import ActivityIcon from 'icons/ActivityIcon';
import ClockIcon from 'icons/ClockIcon';

const SIDEBAR_WIDTH = 225;

const StyledWrapper = styled.div<{active: boolean}>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    z-index: 2;
    ${props=> !props.active && 'visibility: hidden;'}
`

const StyledBack = styled.div<{active: boolean}>`
    background-color: #00000088;
    width: 100%;
    height: 100%;
    opacity: 1;
    ${props => !props.active && 'opacity: 0;'}
`
const StyledContainer = styled.div<{active: boolean}>`
    position:absolute;
    top:0;
    bottom: 0;
    left: 0 ;
    background-color: #ffffff;
    width: ${SIDEBAR_WIDTH}px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 40px 18px;
    ${props => !props.active && `left: -${SIDEBAR_WIDTH * 1.5}px`}
`

const StyledLeftWrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

const StyledRightWrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

const StyledHeader = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    tex-transform: capitalize;
`

interface Props {
    active: boolean
}

const Sidebar = (props: Props) => {
    return (
        <StyledWrapper active={props.active}>
            <StyledBack active={props.active} />
            <StyledContainer active={props.active}>
                <UserInfo />
                <CreateActivityButton />

                <SidebarItem name={'Users'} icon={HumanIcon} />
                <SidebarItem name={'Items'} icon={DirectoryIcon} />
                <SidebarItem name={'Activities'} icon={ActivityIcon} />
               

                <StyledHeader>
                    Actions
                </StyledHeader>
                <SidebarItem name={'Checkin'} icon={ClockIcon} />

            </StyledContainer>

        </StyledWrapper>
    )
}


export default Sidebar