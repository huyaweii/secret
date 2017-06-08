import timeline from './timeline'
import {homeReducer} from 'modules/Home/reducer'

import {createStore, combineReducers} from 'redux'

export default createStore(
  combineReducers(
    {
      homeReducer,
      timeline
    }
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
