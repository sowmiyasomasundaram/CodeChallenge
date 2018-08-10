import { createStore } from 'redux'
import detailsReducer from '../reducers'

export const appstore = createStore(detailsReducer)
