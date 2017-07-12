// const reducer = () => {
//   const state = {
//     name: 'hyw'
//   }
//   return state
// }
const ininState = {
  results: [
    {
      title: 'haha',
      content: '好好学习'
    },
    {
      title: '嘻嘻',
      content: '天天向上'
    }
  ]
}
export default (state = ininState, action) => {
  switch (action.type) {
    case 'post':
      return state
    default:
      return state
  }
}
