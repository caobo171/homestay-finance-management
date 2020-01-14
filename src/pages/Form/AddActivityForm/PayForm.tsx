import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import { CssVariable } from 'Constants'
import { ActivityType, Activity } from 'store/activity/types'
import { useCurrentUser } from 'store/user/hooks'

import { addActivity } from 'store/activity/functions'
import { toast } from 'react-toastify'
import { closeModal } from 'components/Modal'
import { formRef } from 'service/FormRefContext'
import { useAsyncFn } from 'react-use'
import LoadingComponent from 'components/LoadingComponent'
import { now, formatMoney } from 'service/helpers'

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


const PayForm = () => {

    const currentUser = useCurrentUser()

    const [name, setName] = useState('')

    const [money, setMoney] = useState(0)

    const validate = ()=>{
        if(name.replace(/\s/g,'') === ''){
            toast.error('Bạn cần ghi tiêu đề !');
            return false
        }else if(money < 1000){
            toast.error('Tiền quá nhỏ !');
            return false
        }

        return true
    }
    const onSubmitHandle = async () => {
        if(!validate()) return 

        if (window.confirm(`Are your sure to pay ${formatMoney(money)} ?`)) {
            const activity: Activity = {
                type: ActivityType.PAY,
                item_id: '-1',
                user_id: currentUser ? currentUser.id : '-1',
                amount: 0,
                cost: Number(money),
                time: now(),
                influencers: [],
                id: '-1',
                name,
                actionDate: now()
            }
            const res = await addActivity(activity)

            if (res) {
                toast.success('Thêm hành động thành công !!')

            } else {
                toast.error('Có lỗi xảy ra rồi :(')
            }

            return await closeModal()
        }
    }


    const [state, fetch] = useAsyncFn(onSubmitHandle , [money, name , currentUser ])

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
                                title={'Tiêu đề'}
                                value={name}
                                onValueChange={setName}
                            />
                            <TextInput
                                type="number"
                                title={'Số tiền'}
                                value={money}
                                onValueChange={setMoney}
                            />
                            <StyledSubmitButton onClick={fetch}>
                                Pay Money
                        </StyledSubmitButton>
                        </StyledWrapper>
                    )
            }
        </>

    )
}


export default PayForm;
