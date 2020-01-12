import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import { CssVariable } from 'Constants'
import SelectInput from '../SelectInput'
import DatePicker from '../DatePicker'
import ImagePicker from '../ImagePicker'
import * as firebase from 'firebase'
import { addItem } from 'store/item/function'
import Item from 'store/item/types'
import { useCurrentUser } from 'store/user/hooks'
import { Activity } from 'store/activity/types'
import { addActivity } from 'store/activity/functions'
import { closeModal } from 'components/Modal'

const StyledWrapper = styled.div`
    font-size: 14px;
    width: 280px;
    display: flex;
    flex-direction: column;
    background-color: #F6F6F6;

    align-items: flex-end;
`

const StyledItem = styled.div`
    display:flex;
    align-items: center;
    justify-content:  center;
    border: 1px solid #D6E4FF;
    width: 100%;
    height: 42px;
`

const StyledSubmitButton = styled.div`
    width: 60%;
    height: 32px;
    border-radius: 50px;
    display:flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    background-color: ${CssVariable.PRIMARY_COLOR};
    margin: 20px 12px 20px 0px;
`
const SELECT_TYPE_DATA = [
    {
        name: 'Đồ dùng chung',
        value: 'general'
    },
    {
        name: 'Đồ dùng riêng',
        value: 'not_general'
    }
]

const AddActivityForm = () => {

    const currentUser = useCurrentUser()
    const [type, setType ] = useState<"general" | "not_general">('not_general')
    const [name, setName ] = useState<string>('')

    const [postDate, setPostDate] = useState<number>((new Date()).getTime())
    
    const [amount,setAmount ] = useState<number>(0)

    const [cost , setCost ] = useState<number>(0)

    const [unit , setUnit] = useState<string>('')

    const setTypeHandle = useCallback((value:"general" | "not_general")=>{
        setType(value)
    },[type])

    const onSubmitHandle = async ()=>{
        
        const data: Item = {
            type,name,postDate,amount, cost, unit,
            userId: currentUser ? currentUser.id: '-1',
            actionDate: firebase.firestore.Timestamp.now().seconds*1000,
            remain: amount,
            id: '-1' // Fake id to valid Item type
        }

        const itemId = await addItem(data)

        const activity : Activity = {
            type:'buy',
            item_id: itemId,
            user_id: currentUser ? currentUser.id: '-1',
            amount: amount,
            cost: cost,
            time: postDate,
            influencers: [],
            id: '-1'
        }

        const res2 = await addActivity(activity)
        
        if(res2){
            closeModal()
        }

    }

    return (
        <StyledWrapper>
            <TextInput value={name} 
            onValueChange={setName} 
            title="Tên đồ"/>
            <SelectInput data={SELECT_TYPE_DATA}
            onValueChange={setTypeHandle}
            value={type} title="Thể loại"/>
            <TextInput value={amount} type={'number'} onValueChange={setAmount} title="Số lượng"/>
            <TextInput value={unit}  onValueChange={setUnit} title="Đơn vị"/>
            <TextInput value={cost} type={'number'} onValueChange={setCost} title="Tổng giá"/>
            <DatePicker title="Chọn ngày"/>
            {/* <ImagePicker title="File Ảnh đính kèm"/> */}
            <StyledSubmitButton onClick={onSubmitHandle}>
                Add Activity
            </StyledSubmitButton>
        </StyledWrapper>
    )
}




export default AddActivityForm;
