import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import photoReducer from './photoReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './saga/index'

const sagaMiddleware = createSagaMiddleware()

let rootReducer = combineReducers({
  photoReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(reduxThunk, sagaMiddleware))
sagaMiddleware.run(rootWatcher)

export default store