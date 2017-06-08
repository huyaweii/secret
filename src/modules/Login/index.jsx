import React, {Component} from 'react'
import {Input, Button} from 'antd'
import CIcon from 'components/Icon'
import style from './style.less'
export default class Login extends Component {
  componentWillMount () {
  }
  login = () => {
    window.location.href='/home'
  }
  render () {
    return (
      <div className={style.loginWrap}>
        <div>私秘</div>
        <Input
          placeholder='Enter your userName'
          prefix={<CIcon type='user' />}
          className={style.input}
        />
        <Input
          placeholder='Enter your userName'
          prefix={<CIcon type='key' />}
          className={style.input}
        />
        <Button type='primary' width={200} className={style.login} onClick={this.login}>登录</Button>
      </div>
    )
  }
}
