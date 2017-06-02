import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { ConnectedApp } from './App';
import { Login } from './components/Account/Login'
import { Logout } from './components/Account/Logout'
import { Registration } from './components/Account/Registration'
import { SearchContainer } from './components/Search/SearchContainer'
import { PlaylistContainer } from './components/Playlist/PlaylistContainer'
import { ConnectedDashboardContainer } from './components/Dashboard/DashboardContainer'
import { ConnectedSettings } from './components/Account/Settings'
import { ConnectedLoading } from './components/Account/Loading'
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)

function loggedIn() {
  return !!localStorage.mcjwt
}
function loaded() {
  return store.getState().account.accountRestore
}


function requireAuth(nextState, replace) {

  if (!loggedIn()) {
    replace({
      pathname: '/login'
    })
  } else if (!loaded()) {
    store.dispatch({type: "LOADING", payload: nextState.location.pathname})
    replace({
      pathname: '/loading'
    })
  } else {
  }
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="loading" component={ConnectedLoading} />
      <Route path="/" component={ConnectedApp} onEnter={requireAuth} >
        <Route path="search" component={SearchContainer} />
        <Route path="playlists" component={PlaylistContainer} />
        <Route path="dashboard" component={ConnectedDashboardContainer} />
        <Route path="settings" component={ConnectedSettings} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  </Provider>,
  document.getElementById('root')
)
