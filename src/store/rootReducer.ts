import { combineReducers } from 'redux'

import UserReducer from 'store/user/reducer'

const AppReducer = combineReducers({
    user: UserReducer
})


export default AppReducer