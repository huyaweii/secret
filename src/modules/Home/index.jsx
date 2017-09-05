import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.less'
import { Menu, Icon, Card } from 'antd'
// import {connect} from 'react-redux'
import { getList } from './reducer.js'
import View from 'components/View/index.jsx'
import _ from 'lodash'
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

@connect(({ home }) => ({ home }), { getList })
export default class Home extends Component {
  state = {
    noteList: []
  }
  componentWillMount() {
    this.props.getList(res => this.setState({ noteList: res.data }))
  }
  getNoteList = () => {
    this.props.getList(res => this.setState({ noteList: res.data }))
  }
  pub = () => {}
  render() {
    return (
      <div className={style.home}>
        <div style={{ margin: '0 auto' }}>
          {_.map(this.props.home.list, item => (
            <CardItem
              username={item['created_by'].name}
              title={item.title}
              url={item['img_url']}
              avatar={item['created_by'].avatar}
            />
          ))}
        </div>
      </div>
    )
  }
}

class CardItem extends Component {
  state = {}
  render() {
    const { username, title, url, avatar } = this.props
    return (
      <View className={style.card + ' f14'}>
        <img src={avatar} className={style.avatar} />
        <View flex row justify="flex-start" className="f15" style={{ color: '#888' }}>
          发表自: {username}
        </View>
        <View row className="m-y-15">
          <img src={url} style={{ width: '200px' }} />
          <p className="m-l-20" style={{ color: '#444' }}>
            {title}
          </p>
        </View>
        <View row style={{ color: '#aaa' }} className="f12">
          <View flex={1} row style={{ width: 0 }}>
            <Icon type="icon-iconziti23" />
            <i className="iconfont icon-iconziti23" />
            <span>萌</span>
            <span className="m-l-10">可爱</span>
          </View>
          <View flex={1} row style={{ width: 0 }} justify={'flex-end'}>
            <span className="m-r-20">评论</span>
            <span className="m-l-10">赞</span>
          </View>
        </View>
      </View>
    )
  }
}
