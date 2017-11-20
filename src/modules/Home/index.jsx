import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style.less'
import { Input, Button, Modal, Upload, message } from 'antd'
import Icon from 'components/Icon'
// import {connect} from 'react-redux'
import { getList, createComment, createPost, getPosts } from './reducer.js'
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

@connect(({ home }) => ({ home }), { getList, createComment, createPost, getPosts })
export default class Home extends Component {
  state = {
    noteList: [],
    showCreatePost: false
  }
  componentWillMount() {
    this.props.getPosts()
  }
  getNoteList = () => {
    this.props.getList(res => this.setState({ noteList: res.data }))
  }
  handleToggleCreatePost = () => {
    this.setState(preState => ({ showCreatePost: !preState.showCreatePost }))
  }
  pub = () => {}
  render() {
    const { createPost } = this.props
    return (
      <div className={style.home}>
        <div style={{ margin: '0 auto' }}>
          <View flex row className="m-t-20 pointer">
            <Icon type="icon-mingzi" onClick={this.handleToggleCreatePost} />
          </View>
          {_.map(this.props.home.posts, item => (
            <CardItem
              username={item['created_by'].name}
              title={item.title}
              url={item['img']}
              avatar={
                item['created_by'].avatar ||
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
              }
              comments={item.comments}
              key={item.id}
              id={item.id}
              createComment={this.props.createComment}
            />
          ))}
        </div>
        {this.state.showCreatePost && (
          <Modal visible footer={null} onCancel={this.handleToggleCreatePost}>
            <CreatePost createPost={createPost} handleToggleCreatePost={this.handleToggleCreatePost} />
          </Modal>
        )}
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
    const { username, title, url, avatar, comments, id } = this.props
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
          <View flex={1} row style={{ width: 0 }} align="center">
            <Icon type="icon-iconziti23" style={{ marginRight: '5px' }} />
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
        {this.state.showComment && <Comment comments={comments} postId={id} createComment={this.props.createComment} />}
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
    this.props.createComment(this.props.postId, this.state.comment)
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
    this.setState({ title: input.target.value })
  }
  handleUploadImg = target => {
    if (target.file.status === 'done') {
      upload(target.file.originFileObj).then(res => {
        this.setState({ imgUrl: QI_NIU_URL + res.data.key })
      })
    }
  }
  handleSubmit = () => {
    const { title, imgUrl } = this.state
    if (title === '') {
      return message.info('请填写标题')
    }
    if (imgUrl === '') {
      return message.info('请选择图片')
    }
    this.props.createPost(title, imgUrl).then(res => this.props.handleToggleCreatePost())
  }
  render() {
    const { imgUrl } = this.state
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
        <Button type="primary" className="b-center m-t-20" onClick={this.handleSubmit}>
          确定
        </Button>
      </div>
    )
  }
}
