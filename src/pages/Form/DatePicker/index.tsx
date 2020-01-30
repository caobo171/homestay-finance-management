import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import { formRef } from 'service/FormRefContext'

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;

    margin: 12px 0px 6px 0px;
    flex-direction: row;
    align-items: center;
`

const StyledLabel = styled.div`
    flex: 0.5;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledFileInput = styled.input`
    height: 30px;
    flex: 1.5;
    border: none;
    background: #DFDFDF;
    padding-left: 12px;

    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border-radius: 4px;
    max-width: 140px;
`

interface Props {
    title: string,
    value: number,
    onValueChange: (value: number) => void,
}

const formatDate = (time: number) => {
    const date = new Date(time)
    return `${date.getFullYear()}` + `-` + `${date.getMonth() + 1}`.padStart(2, '0') + `-` + `${date.getDate()}`.padStart(2, '0')

}
const DatePicker = ({ title, value, onValueChange }: Props) => {

    const onValueChangeHandle = useCallback((event) => {
        onValueChange(event.target.valueAsNumber)
    }, [value])

    const ref = useRef<HTMLInputElement>(null)
    return <StyledWrapper>
        <StyledLabel>{title}</StyledLabel>
        <StyledFileInput onChange={onValueChangeHandle}
            value={formatDate(value)}
            type="date" />
    </StyledWrapper>
}


export default DatePicker