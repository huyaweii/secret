import { home } from 'modules/Home/reducer'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import ApiClient from '../utils/api.js'

// const client = ApiClient.instance

export default createStore(
  combineReducers({
    home
  }),
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
