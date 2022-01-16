import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    loading: loadingReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

//
// window.store = store // for dev
