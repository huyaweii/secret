import APIS from '../../data'
// import ApiClient from '../../utils/api.js'

// const client = ApiClient.instance
const initState = {
  list: []
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

export const getNoteList = () => (dispatch, getState) => {
  APIS.getNoteList().then(res =>
    dispatch({
      type: 'get',
      res
    })
  )
}
