import React from 'react'
import styled from 'styled-components'
import { CssVariable } from 'Constants'
import { ActivityType } from 'store/activity/types'

const StyledWrapper = styled.div`
    height: 32px;
    width: 100%;
    background-color: ${CssVariable.PRIMARY_COLOR};
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;

    overflow-x: scroll;

    &::-webkit-scrollbar {
        height: 0px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 5px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1); 
    }
`
export const ActivityFilterValue  = {
    ALL :  { type: 'all', name: 'Tất cả' },
    BUY : { type: 'buy', name: 'Mua' },
    DESTROY : { type: 'destroy', name: 'Hủy' },
    USE :  { type: 'use', name: 'Sử dụng' },
    PAY : { type: 'pay', name: 'Trả' }
}

export enum ActivityFilterType {
    ALL  = 'all',
    BUY = 'buy',
    DESTROY = 'destroy',
    USE = 'use',
    PAY = 'pay'
}

interface FilterProps {
    type: string,
    setType: (val: ActivityFilterType) => void
}

const ActivityFilter = ( {type, setType}: FilterProps )=>{

    const setTypeHandle = (val: ActivityFilterType)=>{
        setType(val)
    }
    return (
        <StyledWrapper>
            {
                Object.keys(ActivityFilterValue).map(( key: any)=>{
                    //@ts-ignore
                    const val = ActivityFilterValue[key]
                    return (
                        <FilterItem setType={setTypeHandle} active={type===val.type} key={val.type} {...val}/>
                    )
                })
            }
        </StyledWrapper>
    )
}

export default ActivityFilter


const StyledItemWrapper = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
`

const StyledSpan = styled.span<{active: boolean}>`
    opacity: ${props=> props.active ? 1: 0.7}; 
`

interface Props {
    type: ActivityFilterType,
    name: string,
    active : boolean,
    setType: (val: ActivityFilterType)=> void
}

const FilterItem = ({type, name , active , setType}: Props)=>{
    return (
        <StyledItemWrapper onClick={()=> setType(type) }>
           <StyledSpan active={active}>{name}</StyledSpan> 
        </StyledItemWrapper>
    )
}
