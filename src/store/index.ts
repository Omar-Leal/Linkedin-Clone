import { createStore, applyMiddleware  } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { rootReducer } from '../redux/reducers'

export const store = createStore(rootReducer, applyMiddleware( ThunkMiddleware ));

