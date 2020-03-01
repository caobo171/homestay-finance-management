import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchIcon from 'icons/SearchIcon'
import ItemImage from 'components/ItemImage'
import { useRemainItems } from 'store/item/hooks'
import Item from 'store/item/types'
import ObjectPicker from 'components/ObjectPicker'
import { User } from 'store/user/types'
import { CssVariable } from 'Constants'
import PlusIcon from 'icons/PlusIcon'
import { toast } from 'react-toastify'
import { reformatString } from 'service/helpers'

const StyledWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    flex-direction: column;
`

const StyledAmountWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    align-items: center;
`

const StyledInput = styled.input`
    background: #DFDFDF;
    height: 20px;
    width: 40px;
    max-width: 30px;
    border:none;
    border-radius: 8px;
    padding-left: 8px;
    margin-left: 4px;
`

const StyledPopUpItem = styled.div`
    height: 34px;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #e2e2e2;

    align-items: center;
    padding-left: 10px;
`

const StyledText = styled.div`
    margin-left: 8px;
    font-size: 12px;
`

const StyledPlusButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: ${CssVariable.PRIMARY_COLOR};
    margin:8px;
`

const StyledPlusIcon = styled(PlusIcon)`
    height: 12px;
`


interface Props {
    addPickItem: (item: Item, pickAmount: number) => void,
    pickedItems: Item[]
}

const filterBySearchString = (items: Item[], searchString: string) => {
    const rSearchString = reformatString(searchString)

    return items.filter(item => reformatString(item.name).indexOf(rSearchString) > -1)
}

const ItemPick = ({ addPickItem, pickedItems }: Props) => {

    const [searchString, setSearchString] = useState('')
    const avalableItems = useRemainItems(pickedItems)


    const [currentItem, setCurrentItem] = useState<null | Item>(null)

    const remain = currentItem ? currentItem.remain : 0
    const [pickAmount, setPickAmount] = useState<number>(remain)

    const displayItems = filterBySearchString(avalableItems, searchString)

    const onPickAmountChangeHandle = useCallback((event) => {
        const number = Number(event.target.value)
        setPickAmount(Math.abs(number))
    }, [pickAmount])

    useEffect(()=>{
        if(currentItem){
            setPickAmount(remain)
        }
    },[currentItem])

    const onPickDividerChangeHandle = useCallback((event) => {
        const value = Number(event.target.value) > 0 ? Number(event.target.value) : 1

        const pickAmount = 1 / value * remain

        setPickAmount(pickAmount)


    }, [pickAmount])


    const onChooseItemHandle = useCallback((value: Item | null) => {
        setCurrentItem(value)
    }, [currentItem])

    const onAddItemHandle = useCallback(() => {
        if(pickAmount <= 0  ){
            toast.error('Số lượng đồ chọn phải lớn hơn 0')
            return 
        }
        if (currentItem) {
            addPickItem(currentItem, pickAmount)
            setCurrentItem(null)
        }

    }, [currentItem, pickAmount])

    return (
        <StyledWrapper>
            <ObjectPicker

                searchString={searchString}
                setSearchString={setSearchString}
                displayData={displayItems}
                setCurrentObject={onChooseItemHandle}
                renderer={OptionRow}

                currentObject={currentItem}
                currentObjectRender={currentItem ?
                    <>
                        <ItemImage
                            size={'very_small'}
                            itemId={currentItem.id} />
                        <StyledText>
                            {currentItem.name}
                        </StyledText>
                        <StyledText>
                            -Còn: {currentItem.remain.toFixed(2)}{currentItem.unit}
                        </StyledText>
                    </> : null}
            />

            {
                currentItem && (
                    <StyledAmountWrapper>
                        <StyledText>{'1/ '}</StyledText>
                        <StyledInput type={'number'}
                            value={1 / (currentItem.remain > 0 ? pickAmount / currentItem.remain : 1)}
                            onChange={onPickDividerChangeHandle} />
                        <StyledText>{'- Số lượng: '}</StyledText>
                        <StyledInput type={'number'} value={pickAmount} onChange={onPickAmountChangeHandle} />
                        <StyledText>{currentItem.unit}</StyledText>
                        <StyledPlusButton onClick={onAddItemHandle}>
                            <StyledPlusIcon />
                        </StyledPlusButton>
                    </StyledAmountWrapper>
                )
            }


        </StyledWrapper>
    )
}


export default ItemPick

interface OptionProps {
    data: Item,
    onClick: () => void
}

const OptionRow = (props: OptionProps) => {
    return <StyledPopUpItem onClick={props.onClick}>
        <ItemImage itemId={props.data.id} />
        <StyledText>
            {props.data.name}
        </StyledText>
        <StyledText>
            -Còn: {props.data.remain.toFixed(2)}{props.data.unit}
        </StyledText>
    </StyledPopUpItem>
}

