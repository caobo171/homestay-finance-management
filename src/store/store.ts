import rootReducer from './rootReducer'

import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares: any[] = []

const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

const initialState = {}

const store = createStore(rootReducer, initialState, enhancer)

export default store