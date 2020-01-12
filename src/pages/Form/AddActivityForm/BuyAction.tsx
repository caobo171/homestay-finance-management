import React from 'react'
import styled from 'styled-components'
import TextInput from '../TextInput'
import { CssVariable } from 'Constants'
import SelectInput from '../SelectInput'
import DatePicker from '../DatePicker'
import ImagePicker from '../ImagePicker'

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


const AddActivityForm = () => {
    return (
        <StyledWrapper>
            <TextInput title="Tên đồ"/>
            <SelectInput title="Thể loại"/>
            <TextInput title="Số lượng"/>
            <TextInput title="Đơn vị"/>
            <TextInput title="Tổng giá"/>
            <DatePicker title="Chọn ngày"/>
            <ImagePicker title="File Ảnh đính kèm"/>
            <StyledSubmitButton>
                Add Activity
            </StyledSubmitButton>
        </StyledWrapper>
    )
}




export default AddActivityForm;
