const data = [
  {
    id: 1,
    title: '好好学习',
    content: '每个人都要为了自己的未来，好好学习，不然最终后悔的只有自己',
    created_at: '2017-07-14',
    created_by: 1
  },
  {
    id: 2,
    title: '好好学习',
    content: '每个人都要为了自己的未来，好好学习，不然最终后悔的只有自己',
    created_at: '2017-07-14',
    created_by: 2
  },
  {
    id: 3,
    title: '好好学习',
    content: '每个人都要为了自己的未来，好好学习，不然最终后悔的只有自己',
    created_at: '2017-07-14',
    created_by: 3
  },
  {
    id: 4,
    title: '好好学习',
    content: '每个人都要为了自己的未来，好好学习，不然最终后悔的只有自己',
    created_at: '2017-07-14',
    created_by: 4
  },
  {
    id: 5,
    title: '好好学习',
    content: '每个人都要为了自己的未来，好好学习，不然最终后悔的只有自己',
    created_at: '2017-07-14',
    created_by: 5
  }
]
export const getNoteList = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve({ data })
    } else {
      resolve({})
    }
  })
}
