import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { ConnectedApp } from './App';


import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = syncHistoryWithStore(browserHistory, store)
store.dispatch({type: "LOAD_PORTFOLIO", payload: portfolioData})
store.dispatch({type: "LOAD_BLOG", payload: blogData.reverse()})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={Homepage} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  </Provider>,
  document.getElementById('root')
)
