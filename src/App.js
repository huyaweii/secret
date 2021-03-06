import React, { Component } from 'react'
import './App.css'
import './style/index.less'

import { Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import Bundle from 'components/Bundle'
import RootReducer from './reducers'
import loadHome from 'bundle-loader?lazy!./modules/Home'
import loadLogin from 'bundle-loader?lazy!./modules/Login'
const history = createHistory()
const Home = props => <Bundle load={loadHome}>{Component => <Component />}</Bundle>
const Login = props => <Bundle load={loadLogin}>{Component => <Component />}</Bundle>

// 验证是否登录
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )}
  />
)

class App extends Component {
  render() {
    return (
      <Provider store={RootReducer}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Route path="/Home" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Home} />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
