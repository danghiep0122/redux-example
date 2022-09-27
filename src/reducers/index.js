import { combineReducers } from '@reduxjs/toolkit'

import addressInput from './address'
import loggedReducer from './isLogged'

const allReducers = combineReducers({
    isLogged: loggedReducer,
    address: addressInput
})

export default allReducers