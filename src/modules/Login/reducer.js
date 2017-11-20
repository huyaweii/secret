import APIS from '../../data'
import Client from '../../utils/api'
const client = new Client()
// import ApiClient from '../../utils/api.js'

// const client = ApiClient.instance
const initState = {}
export const profile = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT': {
      return {
        ...state
      }
    }
    case 'LOGIN': {
      return {
        ...action.user
      }
    }
    default:
      return state
  }
}

export const createAccount = (telephone, password) => {
  // axios.post(APIS.createAccount, { telephone, password })
  // APIS.createAccount(telephone, password).then(res =>
  //   dispatch({
  //     type: 'CREATE_ACCOUNT',
  //     res
  //   })
  // )
}

export const login = (telephone, password) => (dispatch, getState) => {
  return client.post(APIS.login, { data: { telephone, password } }, res => {
    return {
      type: 'LOGIN'
    }
  })
}
