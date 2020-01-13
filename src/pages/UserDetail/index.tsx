import React from 'react'
import styled from 'styled-components'
import ActivityRow from 'components/ActivityRow'
import UserInfo from './UserInfo'
import { useParams } from 'react-router-dom'
import { useUser } from 'store/user/hooks'
import { useActivitiesByUserId } from 'store/activity/hooks'

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const StyledActivityHeader = styled.div`
    weight: 400;
    font-size: 20px;


    border-width: 0px 0px 1px 0px ;
    border-style: solid;
    border-color: #D6E4FF;
    
    padding: 10px 0px 20px 16px;
`

const StyledActivitiesWrapper = styled.div`
    width: 100%; 
    overflow-y: scroll;

    height: 400px;

    &::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1); 
    }
`

const UserDetail = () => {

    const param = useParams<{ id: string }>()
    const user = useUser(param.id)

    const activities = useActivitiesByUserId(param.id)

    return (<>
        { (user && user.id) && (
            <StyledWrapper>
                <UserInfo user ={user} />
                <StyledActivityHeader>Activities</StyledActivityHeader>

                <StyledActivitiesWrapper>
                {
                    activities.map(act=>{
                        return (
                            <ActivityRow key={act.id} activity={act}/>
                        )
                    })
                }
                </StyledActivitiesWrapper>
           
            </StyledWrapper>
        )}
    </>)
}

export default UserDetail