import _ from 'lodash'
const apiUrl = 'http://127.0.0.1:3000/'
const APIS = {
  // login,
  createAccount: 'user',
  login: 'login',
  getPosts: 'posts',
  createPost: 'posts',
  createComment: 'create_comment',
  getUpToken: 'get_uptoken'
}
export default _.mapValues(APIS, api => apiUrl + api)
