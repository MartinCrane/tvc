import { combineReducers } from 'redux'
import mouseReducer from './mouseReducer'
import searchReducer from './searchReducer'
import playlistReducer from './playlistReducer'
import sourcesReducer from './sourcesReducer'
import accountReducer from './accountReducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  mouse: mouseReducer,
  search: searchReducer,
  routing: routerReducer,
  playlist: playlistReducer,
  account: accountReducer,
  sources: sourcesReducer
})
