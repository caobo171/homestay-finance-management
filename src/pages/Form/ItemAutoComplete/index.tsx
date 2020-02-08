import React, { useCallback, useState, useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from 'icons/SearchIcon'
import Item from 'store/item/types'
import { User } from 'store/user/types'
import CloseIcon from 'icons/CloseIcon'
import { formRef, undoFormPosition } from 'service/FormRefContext'
import { useItems } from 'store/item/hooks'

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;

    margin: 12px 0px 6px 0px;
    flex-direction: row;
    align-items: center;
`

const StyledLabel = styled.div`
    flex: 0.5;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledSearchWrapper = styled.div`
    height: 30px;
    flex: 1.5;
    border: none;
    background: #DFDFDF;
    padding-left: 12px;

    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border-radius: 4px;
    max-width: 140px;

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
    const rSearchString = searchString.toLowerCase().replace(/\s/g, '')

    return items.filter(item => item.name.toLowerCase()
        .replace(/\s/g, '').indexOf(rSearchString) > -1)
}

const ItemAutoComplete = (props: Props) => {

    const items = useItems()
    const displayItems = filterBySearchString(items, props.value)



    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLInputElement>(null)
    const onFocusHandle = () => {
        setVisible(!visible)

        if (formRef && formRef.current && ref && ref.current) {

            const refTop = ref.current.getBoundingClientRect().top

            console.log(refTop)
            if (window.innerWidth <= 600) {
                formRef.current.style.marginTop = `${200 - refTop}px`
            }
        }
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