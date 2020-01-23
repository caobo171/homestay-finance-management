import { combineReducers } from 'redux'

import UserReducer from 'store/user/reducer'

import ItemReducer from 'store/item/reducer'

import HomestayReducer  from 'store/homestay/reducer'
import AcitivityReducer from 'store/activity/reducer'

const AppReducer = combineReducers({
    user: UserReducer,
    item: ItemReducer,
    activity: AcitivityReducer,
    homestay: HomestayReducer
})


export default AppReducer