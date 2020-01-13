import React from 'react'
import styled from 'styled-components'
import UserAvatar from 'components/UserAvatar'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledUserWrapper = styled.div<{ position?: 'first' | 'center' }>`
    border-width: 1px;
    border-style: solid;
    padding: 0;
    border-radius: 50%;
    ${props => (!props.position || (props.position && props.position !== 'first')) && `
        margin-left: -20px;
    `}

`
const StyledNumber = styled.div`
    margin-left: -20px;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;

    display: flex;
    align-items:center;
    justify-content: center;

    background-color: #DFDFDF;
    color: #8a8a8a;
`
interface Props {
    userIds: string[]
}

const UserGroup = ({ userIds }: Props) => {
    return (
        <>
            {userIds.length > 0 && <StyledWrapper >
                {
                    userIds.map((userId: string, index: number) => {
                        return <React.Fragment key={userId}>
                            <StyledUserWrapper position={index === 0 ? 'first' : 'center'}>
                                <UserAvatar size="small" userId={userId} />
                            </StyledUserWrapper>
                        </React.Fragment>
                    })
                }

                <StyledNumber>
                    <span>{userIds.length}</span>
                </StyledNumber>
            </StyledWrapper>}
        </>

    )
}

export default UserGroup