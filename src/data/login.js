// const data = [
//   {
//     id: 1,
//     name: 'huyawei',
//     password: '123456'
//   }
// ]
export const login = (name, password) => {
  return new Promise((resolve, reject) => {
    if (name === 'hyw' && password === '123456') {
      resolve({ status: 200 })
    } else {
      resolve({})
    }
  })
}
