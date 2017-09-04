import APIS from '../../data'
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
