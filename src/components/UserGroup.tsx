import React from 'react'
import styled from 'styled-components'
import UserAvatar from 'components/UserAvatar.tsx'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledUserWrapper = styled.div<{position?: 'first' | 'center'}>`
    border-width: 1px;
    border-style: solid;
    padding: 0;
    border-radius: 50%;
    ${props=> (!props.position ||  (props.position && props.position !=='first'))  && `
        margin-left: -14px;
    `}

`
const UserGroup = () => {
    return (
        <StyledWrapper >
            <StyledUserWrapper position="first">
                {/* <UserAvatar size="small" /> */}
            </StyledUserWrapper>
            <StyledUserWrapper>
                {/* <UserAvatar size="small" /> */}
            </StyledUserWrapper>
            <StyledUserWrapper>
                {/* <UserAvatar size="small" /> */}
            </StyledUserWrapper>

        </StyledWrapper>
    )
}

export default UserGroup