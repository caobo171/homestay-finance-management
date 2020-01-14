import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import { CssVariable } from 'Constants'
import DatePicker from '../DatePicker'
import ItemPicker, { PickedItemType } from '../Itempicker'
import UserPicker from '../UserPicker'
import SelectInput from '../SelectInput'
import { User } from 'store/user/types'
import { ActivityType, Activity } from 'store/activity/types'
import { useCurrentUser } from 'store/user/hooks'

import * as firebase from 'firebase'
import Item from 'store/item/types'
import { addActivity } from 'store/activity/functions'
import { updateAmountOfItem } from 'store/item/function'
import { toast } from 'react-toastify'
import { closeModal } from 'components/Modal'
import { formRef } from 'service/FormRefContext'
import { useAsyncFn } from 'react-use'
import LoadingComponent from 'components/LoadingComponent'

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
    margin: 8px 12px 20px 0px;
`

const SELECT_DATA_TYPES = [
    {
        value: ActivityType.BUY,
        name: 'Hủy'
    },
    {
        value: ActivityType.USE,
        name: 'Sử dụng'
    }
]

const UseActionForm = () => {

    const currentUser = useCurrentUser()
    const [pickedItems, setPickedItems] =
        useState<Map<string, PickedItemType>>(new Map())

    const [name, setName] = useState('')

    const [time, setTime] = useState<number>((new Date).getTime())

    const [pickedUsers, setPickedUsers] = useState<Map<string, User>>(new Map())

    const [type, setType] = useState<ActivityType>(ActivityType.USE)



    const onSubmitHandle = async () => {
        if (window.confirm('Are your sure to create this activity ?')) {
            const actionDate = firebase.firestore.Timestamp.now().seconds * 1000
            const pickedUserIds = [...pickedUsers.values()].map(user => user.id);


            const res = await Promise.all([...pickedItems.values()].map(async (data) => {
                const amount = 1 / (data.pickAmount) * data.item.remain;
                const activity: Activity = {
                    type,
                    item_id: data.item.id,
                    user_id: currentUser ? currentUser.id : '-1',
                    amount,
                    cost: amount / data.item.amount * data.item.cost,
                    time,
                    influencers: pickedUserIds,
                    id: '-1',
                    name,
                    actionDate
                }
                const item: Item = {

                    ...data.item,
                    remain: data.item.remain - amount
                }

                await addActivity(activity)

                return await updateAmountOfItem(item)

            }))

            if (res) {
                toast.success('Thêm hành động thành công !!')

            } else {
                toast.error('Có lỗi xảy ra rồi :(')
            }

            return await closeModal()
        }
    }


    const [state, fetch] = useAsyncFn(onSubmitHandle, [
        pickedItems,
        currentUser,
        pickedUsers,
        time,
        type
    ])

    return (
        <>
            {
                state.loading ? <LoadingComponent /> :
                    (
                        <StyledWrapper
                            ref={formRef}
                            onClick={(event: any) => {
                                if (event.target.tagName === 'DIV') {
                                    if (formRef && formRef.current) {

                                        //@ts-ignore
                                        formRef.current.style.marginTop = '0px';
                                    }
                                }
                            }}>

                            <TextInput
                                title={'Tên'}
                                value={name}
                                onValueChange={setName}
                            />

                            <SelectInput

                                data={SELECT_DATA_TYPES}
                                title={'Type'}
                                value={type}
                                onValueChange={setType}
                            />


                            <DatePicker
                                title={'Chọn ngày'}
                                value={time}
                                onValueChange={setTime}
                            />

                            <ItemPicker
                                pickedItems={pickedItems}
                                setPickedItems={setPickedItems}
                            />

                            <UserPicker pickedUsers={pickedUsers}
                                setPickedUsers={setPickedUsers}
                            />

                            <StyledSubmitButton onClick={fetch}>
                                Add Activity
                        </StyledSubmitButton>
                        </StyledWrapper>
                    )
            }
        </>

    )
}


export default UseActionForm;
