import apiUrl from '../data'
import axios from 'axios'

// const upAddress = '//upload-z1.qiniu.com'
export const upload = (file, callback) => {
  return axios.get(apiUrl.getUpToken).then(v => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('key', 'web_circle_' + Date.now() + '_' + file.name)
    formData.append('token', v.data.uploadToken)
    return axios.post('http://upload-z1.qiniu.com', formData)
  })
}
