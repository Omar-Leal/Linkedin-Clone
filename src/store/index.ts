import { createStore, applyMiddleware  } from 'redux'
import { rootReducer } from '../redux/reducers'

export const store = createStore(rootReducer, {})

