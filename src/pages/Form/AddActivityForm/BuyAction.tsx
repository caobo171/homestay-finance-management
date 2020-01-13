import React, { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import { CssVariable } from 'Constants'
import SelectInput from '../SelectInput'
import DatePicker from '../DatePicker'
import ImagePicker from '../ImagePicker'
import * as firebase from 'firebase'
import { addItem } from 'store/item/function'
import Item, { ItemType } from 'store/item/types'
import { useCurrentUser } from 'store/user/hooks'
import { Activity, ActivityType } from 'store/activity/types'
import { addActivity } from 'store/activity/functions'
import { closeModal } from 'components/Modal'
import { toast } from 'react-toastify'
import { formRef } from 'service/FormRefContext'

const StyledWrapper = styled.div`
    font-size: 14px;
    width: 280px;
    display: flex;
    flex-direction: column;
    background-color: #F6F6F6;

    align-items: flex-end;

    border-radius: 4px;
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

export const Buy: React.Context<{}> & {
    ref?: any
} = React.createContext<{}>({})

const AddActivityForm = () => {

    const currentUser = useCurrentUser()
    const [type, setType ] = useState<ItemType>(ItemType.NOT_GENERAL)
    const [name, setName ] = useState<string>('')

    const [postDate, setPostDate] = useState<number>((new Date()).getTime())
    
    const [amount,setAmount ] = useState<number>(0)

    const [cost , setCost ] = useState<number>(0)

    const [unit , setUnit] = useState<string>('')

    const refActivityForm = useRef(null)
    const setTypeHandle = useCallback((value: ItemType)=>{
        setType(value)
    },[type])

    const onSubmitHandle = async ()=>{
        
        const actionDate = firebase.firestore.Timestamp.now().seconds*1000
        const data: Item = {
            type,name,postDate,amount, cost, unit,
            userId: currentUser ? currentUser.id: '-1',
            actionDate,
            remain: amount,
            id: '-1' // Fake id to valid Item type
        }

        // console.log(data)
        const itemId = await addItem(data)

        const activity : Activity = {
            type: ActivityType.BUY,
            item_id: itemId,
            user_id: currentUser ? currentUser.id: '-1',
            amount: amount,
            cost: cost,
            time: postDate,
            influencers: [],
            id: '-1', 
            name: `Mua ${name}`,
            actionDate
        }

        const res2 = await addActivity(activity)
        
        if(res2){
            toast.success('Thêm đồ thành công !!')
            closeModal()
        }

    }

    return (
        <StyledWrapper ref={formRef} onClick={(event:any)=>{
            if(event.target.tagName === 'DIV'){
                if(formRef && formRef.current){
                    formRef.current.style.marginTop='0px';
                }
            }
        }}>
            <TextInput value={name} 
            onValueChange={setName} 
         
            title="Tên đồ"/>
            <SelectInput data={SELECT_TYPE_DATA}
            onValueChange={setTypeHandle}
            value={type} title="Thể loại"/>
            <TextInput  value={amount} type={'number'} onValueChange={setAmount} title="Số lượng"/>
            <TextInput  value={unit}  onValueChange={setUnit} title="Đơn vị"/>
            <TextInput   value={cost} type={'number'} onValueChange={setCost} title="Tổng giá"/>
            <DatePicker 
            value={postDate}
            onValueChange={setPostDate}
            title="Chọn ngày"/>
            {/* <ImagePicker title="File Ảnh đính kèm"/> */}
            <StyledSubmitButton onClick={onSubmitHandle}>
                Add Activity
            </StyledSubmitButton>
        </StyledWrapper>
    )
}




export default AddActivityForm;
