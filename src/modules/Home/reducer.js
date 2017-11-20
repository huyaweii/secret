import APIS from '../../data'
import Client from '../../utils/api'
import _ from 'lodash'
const client = new Client()

// import ApiClient from '../../utils/api.js'

// const client = ApiClient.instance
const initState = {
  posts: {}
}
export const home = (state = initState, action) => {
  switch (action.type) {
    case 'post':
    case 'get':
      return {
        ...state,
        list: action.res.data
      }
    case 'GET_POSTS': {
      //const posts = _.keyBy()
      return {
        ...state,
        posts: {
          ..._.keyBy(action.data, 'id')
        }
      }
    }
    case 'POST_COMMENT': {
      return {
        ...state
      }
    }
    default:
      return state
  }
}

export const getList = () => (dispatch, getState) => {
  APIS.getList().then(res =>
    dispatch({
      type: 'get',
      res
    })
  )
}
export const getPosts = () => (dispatch, getState) => {
  return client.get(APIS.getPosts, {}, res => {
    return {
      type: 'GET_POSTS'
    }
  })
}
export const createPost = (title, img) => (dispatch, getState) => {
  return client.post(APIS.createPost, { data: { title, img } }, res => {
    return {
      type: 'CREATE_POST'
    }
  })
}

export const createComment = (id, content, at_user) => (dispatch, getState) => {
  return client.post(APIS.createComment, { data: { id, content, at_user } }, res => {
    return {
      type: 'POST_COMMENT'
    }
  })
}
