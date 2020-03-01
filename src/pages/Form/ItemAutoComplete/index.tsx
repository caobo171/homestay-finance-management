import React, { useCallback, useState, useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from 'icons/SearchIcon'
import Item from 'store/item/types'
import { User } from 'store/user/types'
import CloseIcon from 'icons/CloseIcon'
import { formRef, undoFormPosition } from 'service/FormRefContext'
import { useItems } from 'store/item/hooks'
import Constants from 'Constants'
import { reformatString } from 'service/helpers'

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;

    margin: 12px 0px 6px 0px;
    flex-direction: row;
    align-items: center;
    font-size: ${Constants.LABEL_FONTSIZE}px;
`

const StyledLabel = styled.div`
    flex: 0.5;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledSearchWrapper = styled.div`
    height: ${Constants.INPUT_HEIGHT}px;
    flex: 1.5;
    border: none;
    background: #DFDFDF;
    padding-left: 12px;
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border-radius: 4px;
    max-width: 140px;
    max-width: ${Constants.MAX_INPUT_WIDTH}px;
    position: relative
`

const StyledSearch = styled.input`
    height: 28px;
    max-width: 140px;
    border:none;
    background: transparent
`

const StyledPopUpList = styled.div`
    position: absolute;
    left: 0;
    top: 30px ;
    width: 100%;
    background-color: #e2e2e2;
    z-index:4;
    border-width: 1px;
    border-style: solid;
    border-color: #b1b1b1;
    border-radius: 4px;
`

const StyleDiv = styled.div`
    padding: 4px 0px 4px 8px;
    
`


interface Props {

    value: string,
    setValue: (value: string) => void
    title: string,
}

const filterBySearchString = (items: Item[], searchString: string) => {
    const rSearchString = reformatString(searchString)

    return items.filter(item => reformatString(item.name).indexOf(rSearchString) > -1)
}

const ItemAutoComplete = (props: Props) => {

    const items = useItems()
    const displayItems = filterBySearchString(items, props.value)



    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLInputElement>(null)
    const onFocusHandle = () => {
        setVisible(!visible)
    }

    const searchStringChangeHandle = useCallback((event) => {
        props.setValue(event.target.value)
    }, [props.value])



    return (
        <StyledWrapper>
            <StyledLabel>{props.title}*</StyledLabel>
            <StyledSearchWrapper>
                
                <StyledSearch value={props.value}
                    ref={ref}
                    onClick={onFocusHandle}
                    onChange={searchStringChangeHandle} />


                {visible && <StyledPopUpList>
                    {displayItems.map(data => {
                        return (
                            <StyleDiv
                                key={data.id}
                                onClick={() => {
                                    props.setValue(data.name)
                                    setVisible(false)
                                    undoFormPosition()
                                }}
                            >{data.name}</StyleDiv>
                        )
                    })}
                </StyledPopUpList>}
            </StyledSearchWrapper>
        </StyledWrapper>
    )
}


export default ItemAutoComplete