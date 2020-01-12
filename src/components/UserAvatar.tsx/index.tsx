import React from 'react'
import styled from 'styled-components/macro'
import { useUser } from 'store/user/hooks'

const DEFAULT_IMAGE = 'https://data-gcdn.basecdn.net/avatar/sys1/8e/ca/f6/00/20/504d5bda87c57c66b1a1fe2e52c0dad8/0.caonguyen_1.jpg'


const StyledWrapper = styled.div<{size: 'small'|'big'| undefined}>`
    height: 40px;
    width: 40px;
    ${props=> props.size === 'small' && `
        width: 32px; 
        height: 32px;
    `}
`

const StyledImage = styled.img<{size: 'small'|'big'| undefined}>`
    border-radius : 50%;
    height: 40px;
    width: 40px;
    ${props=> props.size === 'small' && `
        width: 32px; 
        height: 32px;
    `}
`

interface Props {
    size?: 'small'| 'big',
    userId: string
}

const UserAvatar = (props: Props)=>{

    const  user = useUser(props.userId)

    return (
        <StyledWrapper size ={props.size}>
            <StyledImage  size ={props.size} src={user? user.photoURL : DEFAULT_IMAGE}/>
        </StyledWrapper>
    )

}


export default UserAvatar