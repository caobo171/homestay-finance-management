import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from "react-transition-group/Transition";

import { EventEmitter } from 'events'


const event = new EventEmitter()

const StyledWrapper = styled.div<{ status: TransitionStatus }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    
    z-index: 2;

    display:flex;
    align-items: center;
    justify-content: center;


    opacity: ${props => props.status === 'entered' ? 1 : 0};
`
const StyledFront = styled.div`
    z-index: 2;
`

const StyledBack  = styled.div`
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
`

interface Props {

}


export const openModal = (element: React.ReactElement) => {
    event.emit('change', element)
}

export const closeModal = () => {
    event.emit('change', null)
}



export const changeModalContent = (element: React.ReactElement) => {
    event.emit('change-content', element)
}

type ContentType = React.ReactElement | null;

const Modal = (props: Props) => {



    const [open, setOpen] = useState(false)
    const [content, setContent] = useState<ContentType>(null)
    useEffect(() => {

        const handler = (value: React.ReactElement) => {
            if (value) {


                setContent(value)
                setOpen(true)
            } else {
                setContent(null)
                setOpen(false)
            }

        }

        const changeContentHandler = (value: React.ReactElement) => {
            setContent(value)
        }

        event.on('change', handler)
        event.on('change-content', changeContentHandler)

        return () => {
            event.off('change', handler)
            event.off('change-content', changeContentHandler)
        }
    }, [open, content])

    const onCloseHandle = () => {
        setOpen(false)
        setContent(null)
    }

    return (
        <CSSTransition in={open} timeout={0.3}
            mountOnEnter={true} unmountOnExit={true}>
            {
                status => <StyledWrapper  status={status}>
                    
                    <StyledBack onClick={onCloseHandle}/>
                    <StyledFront>
                        {content}
                    </StyledFront>

                </StyledWrapper>
            }

        </CSSTransition>

    )
}

export default Modal 