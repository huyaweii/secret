const data = {
  1: {
    id: 1,
    title: '我的小猫咪',
    img_url:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg',
    created_by: {
      id: 1,
      name: '小小鸟',
      avatar:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
    },
    comments: {
      1: {
        id: 1,
        content: '这个小猫挺可爱',
        created_by: {
          id: 1,
          name: '风儿',
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
        },
        reply: {
          id: 1,
          content: '哈哈',
          created_by: {
            id: 1,
            name: 'haha'
          },
          at_user: {
            id: 1,
            name: 'haha'
          }
        }
      },
      2: {
        id: 2,
        content: '这个小猫挺可爱',
        created_by: {
          id: 1,
          name: '风儿',
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
        },
        reply: {
          id: 1,
          content: '哈哈',
          created_by: {
            id: 1,
            name: 'haha'
          },
          at_user: {
            id: 1,
            name: 'haha'
          }
        }
      }
    }
  },
  2: {
    id: 2,
    title: '可爱的小猫',
    img_url:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504548417812&di=33f708267e98ff3d4e8fb7a8a5aee5ee&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F3%2F960x600%2F1370750278971.jpg',
    created_by: {
      id: 1,
      name: '小小鸟',
      avatar:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
    },
    comments: {
      1: {
        id: 1,
        content: '这个小猫挺可爱',
        created_by: {
          id: 1,
          name: '风儿',
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
        },
        reply: {
          id: 1,
          content: '哈哈',
          created_by: {
            id: 1,
            name: 'haha'
          },
          at_user: {
            id: 1,
            name: 'haha'
          }
        }
      }
    }
  },
  3: {
    id: 3,
    title: '小可爱',
    img_url:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg',

    created_by: {
      id: 1,
      name: '小小鸟',
      avatar:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
    },
    comments: {
      1: {
        id: 1,
        content: '这个小猫挺可爱',
        created_by: {
          id: 1,
          name: '风儿',
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504463578580&di=3798e51217d469af7748543e95b34a08&imgtype=0&src=http%3A%2F%2Ftupian.aladd.net%2F2014%2F9%2F943.jpg'
        },
        reply: {
          id: 1,
          content: '哈哈',
          created_by: {
            id: 1,
            name: 'haha'
          },
          at_user: {
            id: 1,
            name: 'haha'
          }
        }
      }
    }
  }
}
export const getList = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve({ data })
    } else {
      resolve({})
    }
  })
}

export const createComment = (content, at_user) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve({ content, at_user })
    } else {
      resolve({})
    }
  })
}
