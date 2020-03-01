import React, { useState } from 'react'
import styled from 'styled-components/macro'
import TextInput from 'components/Form/TextInput'
import Constants, { CssVariable } from 'Constants'
import { useAsyncFn } from 'react-use'
import { toast } from 'react-toastify'
import HomeStay, { FAKE_IMAGE_HOMESTAY } from 'store/homestay/types'
import { addHomestay } from 'store/homestay/function'
import LoadingComponent from 'components/LoadingComponent'


const StyledWrapper = styled.div`

    width: 320px;
    background-color: #ffffff;
`

const StyledSubmitButton = styled.div`
    width: 60%;
    height: ${Constants.INPUT_HEIGHT}px;
    font-size: ${Constants.LABEL_FONTSIZE}px;
    text-transform: uppercase;
    border-radius: 50px;
    display:flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    background-color: ${CssVariable.PRIMARY_COLOR};
    margin: 20px 12px 20px 0px;
`


const AddHomeStayForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [photoUrl, setPhotoUrl] = useState('')

    const validate = () => {
        if (name.replace(/\s/g, '') === '') {
            toast.error('Bạn cần ghi tên Homestay ')
            return false
        } else if (description.replace(/\s/g, '') === '') {
            toast.error('Bạn nên viết ghi chú cho homestay!')
            return false
        }

        return true
    }
    const onSubmitHandle = async () => {
        if (!validate()) return
        const validatePhotoUrl = photoUrl.replace(/\s/g, '') === '' ? FAKE_IMAGE_HOMESTAY : photoUrl
        const homeStay: HomeStay = {
            id: '-1',
            name,
            description,
            photoUrl: validatePhotoUrl
        }

        const res =  await addHomestay(homeStay)
        if(res){
            return toast.success('Add Homestay Successfull')
        }
    }
    const [state, fetch] = useAsyncFn(onSubmitHandle, [
        name,
        description,
        photoUrl
    ])

    return (

        <StyledWrapper>
            {
                state.loading ? (
                    <LoadingComponent />
                ) : (
                        <>
                            <TextInput
                                type="text"
                                label={'Tên'}
                                value={name}
                                setValue={setName}
                            />
                            <TextInput
                                type="textarea"
                                label={'Ghi chú'}
                                value={description}
                                setValue={setDescription}
                            />
                            <TextInput
                                type="text"
                                label={'Ảnh bìa'}
                                value={photoUrl}
                                setValue={setPhotoUrl}
                            />
                            <StyledSubmitButton onClick={fetch}>
                                Add Activity
                            </StyledSubmitButton>
                        </>
                    )
            }

        </StyledWrapper>
    )
}

export default AddHomeStayForm