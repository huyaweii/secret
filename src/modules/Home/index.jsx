import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.less'
import { Input, Button, Modal, Upload } from 'antd'
import Icon from 'components/Icon'
// import {connect} from 'react-redux'
import { getList, createComment } from './reducer.js'
import View from 'components/View'
import Avatar from 'components/Avatar'
import { upload } from 'utils/upload'
import { QI_NIU_URL } from 'config/constant'

import _ from 'lodash'

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

@connect(({ home }) => ({ home }), { getList, createComment })
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
          <View flex row className="m-t-20 pointer">
            <Icon type="icon-mingzi" />
          </View>
          {_.map(this.props.home.list, item => (
            <CardItem
              username={item['created_by'].name}
              title={item.title}
              url={item['img_url']}
              avatar={item['created_by'].avatar}
              comments={item.comments}
              key={item.id}
              id={item.id}
              createComment={this.props.createComment}
            />
          ))}
        </div>
        <Modal visible={Boolean(true)} footer={null}>
          <CreatePost />{' '}
        </Modal>
      </div>
    )
  }
}

class CardItem extends Component {
  state = {
    showComment: false
  }
  handleToggleComment = () => {
    this.setState({ showComment: !this.state.showComment })
  }
  render() {
    const { username, title, url, avatar, comments } = this.props
    return (
      <View className={style.card + ' f14'}>
        <Avatar url={avatar} size={70} className={style.avatar} />
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
            <span>萌</span>
            <span className="m-l-10">可爱</span>
          </View>
          <View flex={1} row style={{ width: 0 }} justify={'flex-end'}>
            <span className="m-r-20 pointer" onClick={this.handleToggleComment}>
              评论
            </span>
            <span className="m-l-10">赞</span>
          </View>
        </View>
        {this.state.showComment && <Comment comments={comments} createComment={this.props.createComment} />}
      </View>
    )
  }
}
class Comment extends Component {
  state = {
    comment: ''
  }
  handleInputComment = comment => {
    this.setState({ comment: comment.target.value })
  }
  handleCreateComment = () => {
    this.props.createComment(this.props.id, this.state.comment)
  }
  render() {
    const { comments } = this.props
    return (
      <View className="m-t-15">
        <View row>
          <Input type="text" className="m-r-10" onChange={this.handleInputComment} value={this.state.comment} />
          <Button type="primary" onClick={this.handleCreateComment}>
            发布
          </Button>
        </View>
        <View className="m-t-5">
          {_.map(comments, comment => (
            <View row align="center" className="f12 m-t-10" key={comment.id}>
              <Avatar url={comment['created_by']['avatar']} size={30} />
              <span className="m-r-10 m-l-10">{comment['created_by']['name']}</span>
              {comment.content}
            </View>
          ))}
        </View>
      </View>
    )
  }
}
class CreatePost extends Component {
  state = {
    title: '',
    imgUrl: ''
  }
  handleChange = input => {
    this.setState({ title: input.target.valuse })
  }
  handleUploadImg = target => {
    if (target.file.status === 'done') {
      upload(target.file.originFileObj).then(res => {
        this.setState({ imgUrl: QI_NIU_URL + res.data.key })
      })
    }
  }
  render() {
    const { imgUrl } = this.state
    console.log(imgUrl)
    return (
      <div className="m-t-20">
        <Input type="text" onChange={this.handleChange} />
        <Upload
          className={style.avatarUploader + ' m-t-10'}
          name="avatar"
          showUploadList={false}
          action="//jsonplaceholder.typicode.com/posts/"
          onChange={this.handleUploadImg}
        >
          {imgUrl ? (
            <img src={imgUrl} alt="" className={style.avatar} />
          ) : (
            <Icon type="plus" className={style.avatarUploaderTrigger} id="dnd" />
          )}
        </Upload>
        <Button type="primary" className="m-t-20" onClick={this.handleUploadImg}>
          确定
        </Button>
      </div>
    )
  }
}
