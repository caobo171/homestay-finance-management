import React, { useCallback } from 'react'
import styled from 'styled-components/macro'
import SearchIcon from 'icons/SearchIcon'


const StyledSearchWrapper = styled.div`
    background: #DFDFDF;
    display: flex;
    width: 86%;
    flex-direction: row;
    align-items: center;
    padding-left: 8px;
    border-radius: 4px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    margin-bottom: 8px;
`

const StyledSearch = styled.input`
    height: 24px;
    border: none;
  
    padding-left: 12px;


    display:flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    width: 80%;
    background-color: transparent;
`

interface Props {
    searchString: string,
    setSearchString: (value: string)=> void
}
const SearchBox = ({searchString, setSearchString}: Props) => {

    const onChangeSearchStringHandle = useCallback((e)=>{
        setSearchString(e.target.value)
    },[searchString])
    return (
        <StyledSearchWrapper>
            <SearchIcon/>
            <StyledSearch placeholder="Tìm kiếm đồ dùng ..."
             value={searchString}
             onChange={onChangeSearchStringHandle} />
        </StyledSearchWrapper>
    )
}


export default SearchBox

