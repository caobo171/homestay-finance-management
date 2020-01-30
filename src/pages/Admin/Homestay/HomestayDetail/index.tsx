import React, { useState } from 'react'

import styled from 'styled-components'
import HomeStay from 'store/homestay/types'
import UserPicker from 'pages/Form/UserPicker'
import { updateUserPlace } from 'store/user/function'
import { User } from 'store/user/types'
import { CssVariable } from 'Constants'
import { useAsyncFn } from 'react-use'
import LoadingComponent from 'components/LoadingComponent'
import { toast } from 'react-toastify'
import { useUserByPlaceid } from 'store/user/hooks'
import UserGroup from 'components/UserGroup'

const StyledWrapper = styled.div`
    width: 400px;
    background-color: #ffffff;
    padding: 20px;
`

const StyledImage = styled.img`
    flex: 1;
    height: 100%;
    width: 100%;
`

const StyledName = styled.div`
    flex: 0.2;
    font-size: 18px;
    color:${CssVariable.TEXT_COLOR_H1};
    font-weight: 600;
`

const StyledDescription = styled.div`
    flex: 1;
    font-size: 14px;
    color: ${CssVariable.TEXT_COLOR_H1_RGBA(.6)}
`
const StyledInfo = styled.div`
    flex: 2;
`

const StyledUserWrapper = styled.div`
    flex: 1;
`
const StyledUsers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`

const StyledSpan = styled.span`
    font-size: 14px;
    margin-right: 16px;
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

interface Props {
    homestay: HomeStay
}
const HomestayDetail = ({ homestay }: Props) => {

    const [pickedUsers, setPickedUsers] = useState<Map<string, User>>(new Map())

    const users = useUserByPlaceid(homestay.id)
    const onSubmitHandle = async () => {
        const res = await Promise.all([...pickedUsers.values()].map(async (user) => {
            return await updateUserPlace(user, homestay.id)
        }))

        if (res) {
            return toast.success('Thêm người thành công !')
        }
    }
    const [state, fetch] = useAsyncFn(onSubmitHandle, [pickedUsers])
    return (
        <StyledWrapper>

            <StyledImage src={homestay.photoUrl} />

            <StyledInfo>
                <StyledName>
                    {homestay.name}
                </StyledName>
                <StyledDescription>
                    {homestay.description}
                </StyledDescription>
            </StyledInfo>

            {
                state.loading ? (<LoadingComponent />) : (
                    <StyledUserWrapper>
                        <StyledUsers>
                            <StyledSpan>Người ở</StyledSpan>
                            <UserGroup userIds={users.map(user => user.id)} />
                        </StyledUsers>

                        <UserPicker
                            type = 'all'
                            title= "Chọn người "
                            pickedUsers={pickedUsers}
                            setPickedUsers={setPickedUsers}
                        />
                        {
                            [...pickedUsers.values()].length > 0 && (
                                <StyledSubmitButton onClick={fetch}>Lưu thay đổi</StyledSubmitButton>
                            )
                        }


                    </StyledUserWrapper>


                )
            }

        </StyledWrapper>
    )
}

export default HomestayDetail