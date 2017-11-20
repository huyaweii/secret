import axios from 'axios'
import store from '../reducers/index.js'
const methods = ['get', 'post', 'put', 'delete', 'patch']
axios.defaults.headers.common['secret-token'] = localStorage.getItem('token')
export default class Client {
  constructor() {
    methods.map(
      method =>
        (this[method] = (path, { params, data }, dispatch) =>
          new Promise((resolve, reject) =>
            axios[method](path, data).then(res => {
              store.dispatch({ ...dispatch(), data: res.data })
              resolve(res)
            })
          ))
    )
  }
}
