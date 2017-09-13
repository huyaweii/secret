import { login, createAccount } from './login'
import { getList } from './note'
const APIS = {
  login,
  getList,
  createAccount: 'http://127.0.0.1:3000/user',
  login: 'http://127.0.0.1:3000/login',
  createComment: 'http://127.0.0.1:3000/create_comment'
}
export default APIS
