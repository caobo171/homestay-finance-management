import React from 'react'
import styled from 'styled-components/macro'
import NavbarItem from './SidebarItem'
import UserInfo from './UserInfo'


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%; 
    height: 45px;
    justify-content: center;
    background-color: #C4C4C4;

`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%; 
    height: 45px;
    justify-content: space-between;
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

const Sidebar = () => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledLeftWrapper>
                    <NavbarItem name={'Home'} />
                    <NavbarItem name={'Items'} />
                    <NavbarItem name={'Users'} />
                    <NavbarItem name={'Checkin'} />
                </StyledLeftWrapper>

                <StyledRightWrapper>
                    <UserInfo/>
                </StyledRightWrapper>
            </StyledContainer>

        </StyledWrapper>
    )
}


export default Sidebar