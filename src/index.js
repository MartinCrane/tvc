import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, Redirect } from 'react-router';
import App from './App';
import { Login } from './components/Account/Login'
import { Registration } from './components/Account/Registration'
import { SearchContainer } from './components/Search/SearchContainer'
import { PlaylistContainer } from './components/Playlist/PlaylistContainer'
import { ConnectedDashboardContainer } from './components/Dashboard/DashboardContainer'


import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="register" component={Login} />
      <Route path="login" component={Login} />
      <Route path="/" component={App} >
        <Route path="search" component={SearchContainer} />
        <Route path="playlists" component={PlaylistContainer} />
        <Route path="dashboard" component={ConnectedDashboardContainer} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  </Provider>,
  document.getElementById('root')
)


// onUpdate={() => window.scrollTo(0, 0)}
