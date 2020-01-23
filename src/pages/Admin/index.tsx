import React from 'react'
import styled from 'styled-components/macro'
import { CssVariable } from 'Constants'
import PlusIcon from 'icons/PlusIcon'
import { openModal } from 'components/Modal'
import AddHomeStayForm from './Homestay/AddHomeStayForm'
import { useHomeStays } from 'store/homestay/hooks'
import HomeStayItem from './HomeStayItem'




const Wrapper = styled.div`
    width: 90%;
    
`



const StyledAddHomeStayButton = styled.div`
    background-color: ${CssVariable.PRIMARY_COLOR};
    
    width: 160px;
    min-height: 36px;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
   
    margin-top: 20px;
    text-transform: capitalize;

    align-items: center;
    padding-left: 36px;
`

const HomeStayWrapper = styled.div`
    margin-top: 24px;
`
const StyledPlusIcon = styled(PlusIcon)`
    margin-left: 12px;
`

const StyledName = styled.div`
    font-size: 16px;
    font-weight: 500;
`

const Admin = () => {

    const homestays = useHomeStays()
    const onClickHandle = () => {
        openModal(<AddHomeStayForm />)
    }
    return (
        <Wrapper>
            <StyledAddHomeStayButton onClick={onClickHandle}>
                <StyledName>Add HomeStay</StyledName>


                <StyledPlusIcon />

            </StyledAddHomeStayButton>
            <HomeStayWrapper>
                {homestays.map(homestay => {
                    return <HomeStayItem
                        key={homestay.id}
                        homestay={homestay}
                    />
                })}
            </HomeStayWrapper>


        </Wrapper>
    )
}


export default Admin 