import APIS from '../../data'
import Client from '../../utils/api'
const client = new Client()

// import ApiClient from '../../utils/api.js'

// const client = ApiClient.instance
const initState = {
  list: {}
}
export const home = (state = initState, action) => {
  switch (action.type) {
    case 'post':
    case 'get':
      return {
        ...state,
        list: action.res.data
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

export const createComment = (id, content, at_user) => (dispatch, getState) => {
  return client.post(APIS.createComment, { data: { id, content, at_user } }, res => {
    return {
      type: 'POST_COMMENT'
    }
  })
}
