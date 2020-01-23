import React from 'react'

export const formRef = React.createRef<HTMLDivElement>()

export const  undoFormPosition = ()=>{
    if (formRef && formRef.current) {
        formRef.current.style.marginTop = '0px';
    }
}