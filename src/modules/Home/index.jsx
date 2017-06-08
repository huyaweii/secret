import React, {Component} from 'react'

import {Route} from 'react-router-dom'
import style from './style.less'
import {Menu, Icon} from 'antd'
// import {connect} from 'react-redux'

import MyTimeNote from 'modules/MyTimeNote'
import Editor from 'components/Editor'
console.log('1haha')

const SubMenu = Menu.SubMenu

// const patch = () => (
//   {
//     type: 'post' 
//   }
// )
// @connect(
//   ({todos})=>({todos}),
//   {
//     patch
//   }
// )
export default class Home extends Component {
  state={

  }
  componentWillMount () {
    
  }
  componentDidMount () {
    this.getArticleList()
  }
  shouldComponentUpdate (nextProps, nextState) {
    return true
  }
  getArticleList = () => {
    fetch('http://127.0.0.1:3000/article', 
      {
        method: 'GET'
      }).then(
      res => {
        res.json().then(v => console.log(v))
      }
    )
  }
  pub = () => {
    this.props.patch()
    // fetch("http://127.0.0.1:3000/article",
    // {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body:
    //     JSON.stringify({
    //       title: 'lakers',
    //       content: 'kobe is mvp',
    //       user_id: 1
    //     })
    // }).then(
    //   res => {
    //     res.json().then(v => console.log(v))
    //   }
    // )
  }
  render () {
    return (
      <div className={style.home}>
        <div className={style.leftNav}>
          <Menu
            mode='inline'
            className={style.ul}
          >
          <Menu.Item key='1'>我的时光笔记</Menu.Item>
          <Menu.Item key='2'>私密文字</Menu.Item>
          <Menu.Item key='3'>私密影像</Menu.Item>
            <SubMenu 
              key='sub1' 
              title={<span><Icon type="mail" /><span>Navigatio</span></span>}
            >
              <Menu.Item key='4'>Option 1</Menu.Item>
              <Menu.Item key='5'>Option 2</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className={style.conContainer}>
          {/* <button onClick={this.pub}>发布</button>*/}
          <Route path='/' component={MyTimeNote} />
          <Route path='/home/editor' component={Editor} />
        </div>
      </div>
    )
  }
}

