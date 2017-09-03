import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.less'
import { Menu, Icon } from 'antd'
// import {connect} from 'react-redux'
import { getNoteList } from './reducer.js'
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

@connect(({ home }) => ({ home }), { getNoteList })
export default class Home extends Component {
  state = {
    noteList: []
  }
  componentWillMount() {
    this.props.getNoteList(res => this.setState({ noteList: res.data }))
  }
  getNoteList = () => {
    this.props.getNoteList(res => this.setState({ noteList: res.data }))
  }
  pub = () => {
    // this.props.patch()
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
  render() {
    return (
      <div className={style.home}>
        <div className={style.leftNav}>
          <Menu mode="inline" className={style.ul}>
            <Menu.Item key="1">我的时光笔记</Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>新闻列表</span>
                </span>
              }
            >
              <Menu.Item key="4">Option 1</Menu.Item>
              <Menu.Item key="5">Option 2</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className={style.conContainer}>
          {this.props.home.list.map(l =>
            <div style={{ display: 'flex', textAlign: 'left', flexDirection: 'column' }}>
              <p>
                {l.title}
              </p>
              <p>
                {l.content}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
