import React, { useCallback } from 'react'
import styled from 'styled-components'
import { changeModalContent, openModal } from 'components/Modal'
import AddActivityForm from '../AddActivityForm/BuyAction'
import UseActionForm from '../AddActivityForm/UseActionForm'
import PayForm from '../AddActivityForm/PayForm'

const StyledWrapper = styled.div`
    
    width: 225px;
    display: flex;
    flex-direction: column;
    background-color: #F6F6F6;
`

const StyledItem = styled.div`
    display:flex;
    align-items: center;
    justify-content:  center;
    border: 1px solid #D6E4FF;
    width: 100%;
    height: 42px;
`


const SelectForm = () => {
    return (
        <StyledWrapper>
            <SelectItem name={'Mua đồ'} type={'buy'}/>
            <SelectItem name={'Dùng đồ'} type={'create'}/>
            <SelectItem name={'Nộp tiền'} type={'pay'}/>
        </StyledWrapper>
    )
}



interface Props {
    name: string,
    type: 'buy' | 'create' | 'pay'
}
const SelectItem = ({name , type}: Props) => {

    const onClickHandle = useCallback(()=>{
        if(type==='buy'){
            changeModalContent(<AddActivityForm/>)
        }else if(type === 'create'){
            changeModalContent(<UseActionForm/>)
        }else if(type === 'pay'){
            changeModalContent(<PayForm/>)
        }
        
    },[type])
    return (
        <StyledItem
        onClick={onClickHandle}
        ><span>{name}</span></StyledItem>
    )
}


export default SelectForm;
