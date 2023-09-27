import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import reducer from '../reducers/reduser'

const store = configureStore({ reducer }, applyMiddleware(thunk))

export default store
