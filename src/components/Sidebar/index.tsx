import React from 'react'
import styled from 'styled-components/macro'
import SidebarItem from './SidebarItem'
import UserInfo from './UserInfo'
import CreateActivityButton from './CreateActivityButton';
import HumanIcon from 'icons/HumanIcon';
import DirectoryIcon from 'icons/DirectoryIcon';
import ActivityIcon from 'icons/ActivityIcon';
import LogoutIcon from 'icons/LogoutIcon';
import { logout } from 'store/user/function';
import { AppRouterContext } from 'navigation/AppRouter';
import Constants from 'Constants';
import { useActivitiesByDate } from 'store/activity/hooks';
import { now } from 'service/helpers';

const SIDEBAR_WIDTH = 225;

const StyledWrapper = styled.div<{ active: boolean }>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: visible;
    z-index: 2;
    ${props => !props.active && 'visibility: hidden;'}
`

const StyledBack = styled.div<{ active: boolean }>`
    background-color: #00000088;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    opacity: 1;
    ${props => !props.active && 'opacity: 0;'}
`
const StyledContainer = styled.div<{ active: boolean }>`
    ${Constants.IS_MOBILE && 'position:absolute;'}
    height: 100%;
    top:0;
    bottom: 0;
    left: 0 ;
    background-color: #ffffff;
    width: ${SIDEBAR_WIDTH}px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    transition: 0.3s;
    padding: 40px 18px;
    ${!Constants.IS_MOBILE && 'background-color: rgba(100,100,100,0.1);'}
  
    ${props => !props.active && `left: -${SIDEBAR_WIDTH * 1.5}px`}
`


const StyledHeader = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    tex-transform: capitalize;
`

interface Props {
    active: boolean,
    onDismissMenu: () => void
}

const Sidebar = (props: Props) => {

    const onSelectPage = (name: string) => {
        AppRouterContext.ref.props.history.push(`/${name.toLowerCase()}`)
    }

    const activities = useActivitiesByDate(new Date(now()))


    return (
        <>
            {
                Constants.IS_MOBILE ? (
                    <StyledWrapper active={props.active}>
                        <StyledBack
                            active={props.active}
                            onClick={props.onDismissMenu}
                        />
                        <StyledContainer active={props.active}>
                            <UserInfo />
                            <CreateActivityButton />

                            <SidebarItem
                                dismissMenu={props.onDismissMenu}
                                onSelectPage={onSelectPage}
                                name={'Users'} icon={HumanIcon} />
                            <SidebarItem
                                dismissMenu={props.onDismissMenu}
                                onSelectPage={onSelectPage}
                                name={'Items'} icon={DirectoryIcon} />
                            <SidebarItem
                                dismissMenu={props.onDismissMenu}
                                onSelectPage={onSelectPage}

                                todayActivitiesNumber={activities.length}
                                name={'Activities'} icon={ActivityIcon} />


                            <StyledHeader>
                                Actions
                            </StyledHeader>
                            <SidebarItem
                                dismissMenu={props.onDismissMenu}
                                name={'Logout '} icon={LogoutIcon} onSelect={logout} />
                        </StyledContainer>

                    </StyledWrapper>
                ) : (<StyledContainer active={true}>
                    <UserInfo />
                    <CreateActivityButton />

                    <SidebarItem
                        dismissMenu={props.onDismissMenu}
                        onSelectPage={onSelectPage}
                        name={'Users'} icon={HumanIcon} />
                    <SidebarItem
                        dismissMenu={props.onDismissMenu}
                        onSelectPage={onSelectPage}
                        name={'Items'} icon={DirectoryIcon} />
                    <SidebarItem
                        dismissMenu={props.onDismissMenu}
                        onSelectPage={onSelectPage}
                        todayActivitiesNumber = {activities.length}
                        name={'Activities'} icon={ActivityIcon} />


                    <StyledHeader>
                        Actions
                            </StyledHeader>
                    <SidebarItem
                        dismissMenu={props.onDismissMenu}
                        name={'Logout '} icon={LogoutIcon} onSelect={logout} />
                </StyledContainer>
                    )
            }
        </>

    )
}


export default Sidebar