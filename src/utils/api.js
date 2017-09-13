import axios from 'axios'
import store from '../reducers/index.js'
const methods = ['get', 'post', 'put', 'delete', 'patch']

console.log(store, '??')
export default class Client {
  constructor() {
    methods.map(
      method =>
        (this[method] = (path, { params, data }, dispatch) =>
          new Promise((resolve, reject) =>
            axios[method](path, data).then(res => {
              store.dispatch({ ...dispatch(res) })
              resolve(res)
            })
          ))
    )
  }
}
