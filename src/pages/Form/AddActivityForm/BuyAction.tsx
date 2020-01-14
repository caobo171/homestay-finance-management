import React, { useState, useCallback, useRef } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import { CssVariable } from 'Constants'
import SelectInput from '../SelectInput'
import DatePicker from '../DatePicker'
import * as firebase from 'firebase'
import { addItem } from 'store/item/function'
import Item, { ItemType } from 'store/item/types'
import { useCurrentUser } from 'store/user/hooks'
import { Activity, ActivityType } from 'store/activity/types'
import { addActivity } from 'store/activity/functions'
import { closeModal } from 'components/Modal'
import { toast } from 'react-toastify'
import { formRef } from 'service/FormRefContext'
import { useAsyncFn } from 'react-use'
import LoadingComponent from 'components/LoadingComponent'
import ImagePicker from '../ImagePicker'
import { uploadImage, now } from 'service/helpers'

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
        value: ItemType.GENERAL
    },
    {
        name: 'Đồ dùng riêng',
        value: ItemType.NOT_GENERAL
    }
]

export const Buy: React.Context<{}> & {
    ref?: any
} = React.createContext<{}>({})

const AddActivityForm = () => {



    const currentUser = useCurrentUser()
    const [type, setType] = useState<ItemType>(ItemType.NOT_GENERAL)
    const [name, setName] = useState<string>('')

    const [postDate, setPostDate] = useState<number>((new Date()).getTime())

    const [amount, setAmount] = useState<number>(0)

    const [cost, setCost] = useState<number>(0)

    const [unit, setUnit] = useState<string>('')

    const [file, setFile] = useState<null | File>(null)

    const setTypeHandle = useCallback((value: ItemType) => {
        setType(value)
    }, [type])


    const validate = ()=>{
        if(amount <= 0 ) {
            toast.error('Số lượng đồ phải lớn hơn 0 ')
            return false
        }else if (unit.replace(/\s/g,'') === '') {
            toast.error('Nên nhập cả đơn vị vào nữa')
            return false
        }else if (cost < 1000){
            toast.error('Giá quá bé !')
            return false
        }else if (name.replace(/\s/g,'') === ''){
            toast.error('Điền tên đồ nữa !')
            return false
        }

        return true
    }

    const onPickFileHandle = useCallback((file: File)=>{
            setFile(file)
    }, [file])
    const onSubmitHandle = async () => {

        if(!validate()) return ;
    
        let photoUrl = null
        if(file){
            photoUrl = await uploadImage(file) 
            console.log(photoUrl)
        }
    
        const data: Item = {
            type, name, postDate, amount, cost, unit,photoUrl,
            userId: currentUser ? currentUser.id : '-1',
            actionDate: now(),
            remain: amount,
            id: '-1' // Fake id to valid Item type
        }


        const itemId = await addItem(data)

        const activity: Activity = {
            type: ActivityType.BUY,
            item_id: itemId,
            user_id: currentUser ? currentUser.id : '-1',
            amount: amount,
            cost: cost,
            time: postDate,
            influencers: [],
            id: '-1',
            name: `Mua ${name}`,
            actionDate: now()
        }

        const res = await addActivity(activity)

        if (res) {
            toast.success('Thêm đồ thành công !!')

        } else {
            toast.error('Có lỗi xảy ra rồi :(')
        }

        return await closeModal()

    }

    const [state, fetch] = useAsyncFn(onSubmitHandle, [
        currentUser, 
        type, 
        name,
        postDate,   
        amount,
        cost,
        unit,
        file
    ])

    return (
        <>{state.loading ? <LoadingComponent /> : (
            <StyledWrapper ref={formRef} onClick={(event: any) => {
                if (event.target.tagName === 'DIV') {
                    if (formRef && formRef.current) {
                        formRef.current.style.marginTop = '0px';
                    }
                }
            }}>
                <TextInput value={name}
                    onValueChange={setName}

                    title="Tên đồ" />
                <SelectInput data={SELECT_TYPE_DATA}
                    onValueChange={setTypeHandle}
                    value={type} title="Thể loại" />
                <TextInput value={amount} type={'number'} onValueChange={setAmount} title="Số lượng" />
                <TextInput value={unit} onValueChange={setUnit} title="Đơn vị" />
                <TextInput value={cost} type={'number'} onValueChange={setCost} title="Tổng giá" />
                <DatePicker
                    value={postDate}
                    onValueChange={setPostDate}
                    title="Chọn ngày" />
                <ImagePicker title="File Ảnh đính kèm" onValueChange = {onPickFileHandle}/>
                <StyledSubmitButton onClick={fetch}>
                    Add Activity
                        </StyledSubmitButton>

                        <div onClick={async ()=>{
                            if(file){
                                const res = await uploadImage(file)
                                console.log(res)
                            }
                            
                        }}>
                            test
                        </div>
            </StyledWrapper>)}
        </>

    )
}




export default AddActivityForm;
