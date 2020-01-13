import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import SearchIcon from 'icons/SearchIcon'
import Item from 'store/item/types'
import { User } from 'store/user/types'
import CloseIcon from 'icons/CloseIcon'

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
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

    border-radius: 4px;
    max-width: 120px;

    background-color: transparent;
`

const StyledPopUpList = styled.div`
    position: absolute;
    left: 0;
    top: 30px ;
    width: 100%;
    background-color: #e2e2e2;
    z-index:4;
`

const StyledCurrentItem = styled.div`
    height: 24px;
    border: none;
    width: 100%;

    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row

    border-radius: 4px;

    background-color: transparent;
`

const StyledCloseIcon  = styled(CloseIcon)`
    width: 12px;
    height: 12px;
    margin-left: 8px;
    margin-right: 4px;
`

interface Props {

    searchString: string,
    setSearchString: (text: string) => void,

    displayData: Array<User | Item>,
    renderer: React.ElementType<any>,


    currentObject: User | Item | null,
    setCurrentObject: (value: any) => void,

    currentObjectRender: React.ReactElement | null

}

const ObjectPicker = (props: Props) => {


    const [visible, setVisible] = useState(false)

    const onFocusHandle = () => {
        setVisible(true)
    }

    const searchStringChangeHandle = useCallback((event) => {
        props.setSearchString(event.target.value)
    }, [props.searchString])


    const Element = props.renderer
    return (
        <StyledWrapper>
            <StyledSearchWrapper>

                {
                    !props.currentObject ? (
                        <>
                            <SearchIcon />
                            <StyledSearch value={props.searchString}
                                onClick={onFocusHandle}
                                onChange={searchStringChangeHandle} />
                        </>
                    ) : (
                            <StyledCurrentItem>
                                {props.currentObjectRender && props.currentObjectRender}
                                <StyledCloseIcon onClick={
                                       ()=> props.setCurrentObject(null)
                                }/>
                            </StyledCurrentItem>
                        )
                }

                {visible && <StyledPopUpList>
                    {props.displayData.map(data => {
                        return (

                            <Element
                                key={data.id}
                                onClick={() => {
                                    props.setCurrentObject(data)
                                    setVisible(false)
                                }}

                                data = {data}
                            />)
                    })}
                </StyledPopUpList>}
            </StyledSearchWrapper>
        </StyledWrapper>
    )
}


export default ObjectPicker