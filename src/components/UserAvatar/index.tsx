import React from 'react'
import styled from 'styled-components/macro'
import { useUser } from 'store/user/hooks'
import { openModal } from 'components/Modal'
import ImageModal from 'components/ImageModal'

const DEFAULT_IMAGE = 'https://data-gcdn.basecdn.net/avatar/sys1/8e/ca/f6/00/20/504d5bda87c57c66b1a1fe2e52c0dad8/0.caonguyen_1.jpg'


const StyledWrapper = styled.div<{
    size: 'small' | 'big' | undefined,
    height: number | undefined
}>`
    height: 40px;
    width: 40px;
    ${props => props.size === 'small' && `
        width: 32px; 
        height: 32px;
    `}

    ${props => props.height && `
        width: ${props.height}px; 
        height: ${props.height}px; 
    
    `}
`

const StyledImage = styled.img<{
    size: 'small' | 'big' | undefined,
    height: number | undefined

}>`
    border-radius : 50%;
    height: 40px;
    width: 40px;
    ${props => props.size === 'small' && `
        width: 32px; 
        height: 32px;
    `}

    ${props => props.height && `
        width: ${props.height}px; 
        height: ${props.height}px; 
    `}
`

interface Props {
    size?: 'small' | 'big',
    userId: string,
    height?: number
}

const UserAvatar = (props: Props) => {

    const user = useUser(props.userId)

    // const onClickHandle = ()=>{
    //     if(user.id !== '-1'){
    //         openModal(<ImageModal uri={user.photoURL}/>)
    //     }
    // }

    return (
        <StyledWrapper size={props.size} height={props.height}
            // onClick={onClickHandle}
        >
            <StyledImage height={props.height} size={props.size} src={user ? user.photoURL : DEFAULT_IMAGE} />
        </StyledWrapper>
    )

}


export default UserAvatar