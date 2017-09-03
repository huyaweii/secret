import React, { Component } from 'react'
import { Input, Button } from 'antd'
import CIcon from 'components/Icon'
import style from './style.less'
import APIS from '../../data'
import { message } from 'antd'
export default class Login extends Component {
  state = {}
  login = () => {
    APIS.login('hyw', '123456').then(res => {
      if (res.status === 200) {
        window.location.href = '/home'
      } else {
        message.warning('账号不存在')
      }
    })
  }
  render() {
    return (
      <div className={style.loginWrap}>
        <div>私秘</div>
        <Input placeholder="Enter your userName" prefix={<CIcon type="user" />} className={style.input} />
        <Input placeholder="Enter your userName" prefix={<CIcon type="key" />} className={style.input} />
        <Button type="primary" width={200} className={style.login} onClick={this.login}>
          登录
        </Button>
      </div>
    )
  }
}
