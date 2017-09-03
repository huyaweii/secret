// import axios from 'axios'
// import _ from 'lodash'
// export const AJAX_START = 'AJAX_START'
// export const AJAX_FAIL = 'AJAX_FAIL'
// export const AJAX_SUCCESS = 'AJAX_SUCCESS'
// export const AUTH_ERROR = 'AUTH_ERROR'
// export const AJAX = { R: AJAX_START, S: AJAX_SUCCESS, F: AJAX_FAIL }

// // wrap函数 可cancel的Promise
// export const cancelablePromise = promise => {
//   let _hasCanceled = false
//   const wrappedPromise = new Promise((resolve, reject) => {
//     promise
//       .then(val => {
//         !_hasCanceled && resolve(val)
//       })
//       .catch(reject)
//   })

//   wrappedPromise.cancel = () => {
//     _hasCanceled = true
//   }
//   return wrappedPromise
// }

// export default class ApiClient {
//   _baseUrl = ''
//   static _client = null
//   static get instance() {
//     return ApiClient._client || (ApiClient._client = new ApiClient())
//   }

//   // 包含的ajax方法
//   methods = ['get', 'post', 'put', 'delete', 'patch']

//   constructor() {
//     this.methods.forEach(method => {
//       this[method] = (
//         apiPath,
//         options = {
//           params: {},
//           data: {},
//           headers: {},
//           responseType: 'json'
//         },
//         dispatchFlag = false
//       ) => {
//         let { params, data, headers, responseType, ...opts } = options
//         params = params || {}
//         data = data || {}
//         headers = headers || {}
//         responseType = responseType || 'json'
//         dispatchFlag = dispatchFlag || options.dispatchFlag
//         delete params.dispatchFlag
//         delete opts.dispatchFlag

//         const t = this._setToken(params, data, headers, method)
//         params = t.params
//         data = t.data
//         headers = t.headers

//         dispatchFlag && this._dispatchStart()
//         delete params.withoutOrgID

//         const axiosOptions = {
//           method,
//           params,
//           data,
//           headers,
//           ...opts,
//           responseType,
//           url: this._formatUrl(apiPath)
//         }
//         if (method === 'get') delete axiosOptions.data
//         return cancelablePromise(
//           axios(axiosOptions).then(
//             resp => {
//               dispatchFlag && this._dispatchSuccess()
//               return resp.data
//             },
//             error => {
//               const status = Number(_.get(error, 'response.status', 200))
//               if (status === 500) {
//                 this._dispatchFail('服务器出错了')
//                 throw new Error('Error Code: 500 服务器出错了')
//               }
//               if (status === 401) {
//                 // token error 登出
//                 this.sendAction({ type: AUTH_ERROR })
//               }
//               const msg =
//                 _.get(error, 'response.data.detail') ||
//                 _.get(error, 'response.statusText') ||
//                 error.message ||
//                 `出错啦 :${error.statusText}`
//               this._dispatchFail(msg, error.statusText)
//               throw error
//             }
//           )
//         )
//       }
//     })
//   }

//   all = (...rest) => {
//     return Promise.all(rest)
//   }

//   // 供redux使用的中间件
//   middleware = ({ dispatch, getState }) => {
//     return next => action => {
//       if (!action) return Promise.resolve()
//       // onlyFeedbackAction 时 不发送request action
//       const { promise, types, type, args, onlyFeedbackAction, callback, ...rest } = action

//       if (typeof promise !== 'function' || !types) {
//         return next(action)
//       }
//       type && dispatch({ type, ...rest, args })

//       const { REQUEST, SUCCESS, FAILURE } = types
//       !onlyFeedbackAction && dispatch({ type: REQUEST, ...rest, args })
//       return promise(this)
//         .then(data => {
//           if (data && data.code > 0) {
//             dispatch({ type: FAILURE, ...rest, data })
//             throw new Error(data ? data.msg : 'api call errors')
//           }
//           try {
//             dispatch({ type: SUCCESS, ...rest, args, data })
//             if (callback && typeof callback === 'function') {
//               callback(data, ...rest)
//             }
//           } catch (reducerParseError) {
//             throw reducerParseError
//           }
//           return Promise.resolve(data)
//         })
//         .catch(error => {
//           dispatch({ type: FAILURE, error, ...rest, args })
//           return Promise.reject(error)
//         })
//     }
//   }

//   // 绑定BaseURl
//   bindUrl = _url => (this._baseUrl = _url) && this
//   // 绑定store
//   bindStore = store => (this._store = store) && this
//   // 绑定Token
//   bindToken = _getToken => (this._getToken = _getToken) && this

//   // 发送action
//   sendAction = action => this._store && this._store.dispatch(action)

//   // 需要override
//   _getToken = () => ({
//     token: null,
//     key: null,
//     header: null
//   })

//   _setToken = (params, data, headers, method = null) => {
//     const { token, key, header } = this._getToken()
//     if (header) {
//       headers = { ...headers, ...header }
//     } else if (token && key) {
//       if (!method || method === 'get') {
//         params[key] = token
//       } else {
//         data[key] = token
//       }
//     }
//     return { headers, params, data }
//   }

//   // 返回具体api url
//   _formatUrl = apiPath => {
//     if (!apiPath) {
//       throw new Error('api请求地址不存在, 请检查API配置文件')
//     }
//     console.log(apiPath)
//     return apiPath
//     // return apiPath.match(/^https?:\/\//) ? apiPath : this._baseUrl + apiPath
//   }

//   _dispatchStart = () => this.sendAction({ type: AJAX_START })

//   _dispatchSuccess = () => this.sendAction({ type: AJAX_SUCCESS })

//   _dispatchFail = (message, code) => this.sendAction({ type: AJAX_FAIL, error: { message }, code })
// }
