import React from 'react'
import styled from 'styled-components'
import SearchIcon from 'icons/SearchIcon'
import ItemImage from 'components/ItemImage'

const StyledWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const StyledSearchWrapper = styled.div`
    background: #DFDFDF;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 8px;

    border-radius: 4px;
    position: relative;
`

const StyledSearch = styled.input`
    height: 24px;
    border: none;
  
    padding-left: 12px;

    display:flex;
    align-items: center;
    justify-content: center;
    
    margin-right: 12px;

    border-radius: 4px;
    max-width: 140px;

    background-color: transparent;
`

const StyledAmount = styled.div`
`

const StyledInput = styled.input`
    background: #DFDFDF;
    height: 24px;
    width: 30px;
    border:none;
    margin-left : 8px;
    border-radius: 4px;
`

const StyledPopUpList = styled.div`
    position: absolute;
    left: 0;
    top: 30px ;
    width: 100%;
    background-color: #e2e2e2;
`

const StyledPopUpItem = styled.div`
    height: 34px;
    width: 190px;
    display: flex;
    flex-direction: row;
    background-color: #e2e2e2;

    align-items: center;
    padding: 2px;
`

const StyledText = styled.div`
    margin-left: 8px;
`

const ItemPick = () => {
    return (
        <StyledWrapper>
            <StyledSearchWrapper>
                <SearchIcon />
                <StyledSearch />
                <StyledPopUpList>

                    {[1, 2, 3].map(e => {
                        return (
                            <StyledPopUpItem>
                                <ItemImage />
                                <StyledText>
                                    Thịt Lợn
                            </StyledText>
                                <StyledText>
                                    -Còn: 2kg
                            </StyledText>
                            </StyledPopUpItem>
                        )
                    })
                    }
                </StyledPopUpList>
            </StyledSearchWrapper>

            <StyledAmount>
                <StyledInput />
            </StyledAmount>
        </StyledWrapper>
    )
}


export default ItemPick