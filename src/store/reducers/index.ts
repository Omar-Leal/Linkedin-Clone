import { combineReducers  } from 'redux'

import userReducer from './userReducer'

let rootReducer = combineReducers({
  userState: userReducer
})