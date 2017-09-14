import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Input, Button } from 'antd'
import CIcon from 'components/Icon'
import View from 'components/View'
import style from './style.less'
import { createAccount, login } from './reducer.js'
@connect(({ user }) => ({ user }), { createAccount, login })
export default class Login extends Component {
  state = {
    showLogin: true,
    telephone: '',
    password: ''
  }
  handleToggleLogin = () => {
    this.setState({ showLogin: !this.state.showLogin })
  }
  handleCreateAccount = () => {
    const { telephone, password } = this.state
    this.props.createAccount(telephone, password)
  }
  handleChange = (name, input) => {
    this.setState({ [name]: input.target.value })
  }
  handleLogin = () => {
    const { telephone, password } = this.state
    this.props
      .login(telephone, password)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.user.id)
        window.location.href = '/home'
      })
      .catch(e => console.log(e))
  }
  handleTest = () => {
    const { telephone, password } = this.state
    this.props
      .login(telephone, password)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userID', res.data.user.id)
      })
      .catch(e => console.log(e))
  }
  render() {
    return (
      <div className={style.loginWrap}>
        <div>咪GO</div>
        {this.state.showLogin && (
          <View>
            <Input
              placeholder="输入你的用户名"
              prefix={<CIcon type="user" />}
              className={style.input}
              onChange={this.handleChange.bind(this, 'telephone')}
            />
            <Input
              placeholder="输入你的密码"
              prefix={<CIcon type="key" />}
              className={style.input}
              onChange={this.handleChange.bind(this, 'password')}
            />
            <Button type="primary" width={200} className={style.login} onClick={this.handleLogin}>
              登录
            </Button>
            <Button type="primary" width={200} className={style.login + ' m-t-5'} onClick={this.handleToggleLogin}>
              注册
            </Button>
          </View>
        )}
        {!this.state.showLogin && (
          <View>
            <Input
              placeholder="输入你的手机号"
              prefix={<CIcon type="icon-shoujihao" />}
              onChange={this.handleChange.bind(this, 'telephone')}
              className={style.input}
              name="telephone"
            />
            <Input
              placeholder="输入你的密码"
              prefix={<CIcon type="key" />}
              onChange={this.handleChange.bind(this, 'password')}
              className={style.input}
              name="password"
            />
            <Button type="primary" width={200} className={style.login + ' m-t-5'} onClick={this.handleCreateAccount}>
              完成
            </Button>
          </View>
        )}
      </div>
    )
  }
}
