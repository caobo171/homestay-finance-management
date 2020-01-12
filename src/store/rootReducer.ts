import { combineReducers } from 'redux'

import UserReducer from 'store/user/reducer'

import ItemReducer from 'store/item/reducer'
import AcitivityReducer from 'store/activity/reducer'

const AppReducer = combineReducers({
    user: UserReducer,
    item: ItemReducer,
    activity: AcitivityReducer
})


export default AppReducer