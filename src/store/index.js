import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { postReducer } from './reducers/postReducer'

const rootReducer = combineReducers({
    post: postReducer
})

const Store = createStore(rootReducer, applyMiddleware(thunk))

export default Store