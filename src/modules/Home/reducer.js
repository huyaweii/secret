export const homeReducer = (state={name: 'asdf'}, action) => {
  switch (action.type) {
    case 'post': 
    case 'get':
    default: 
    return {name: 'kobe'}
  } 
}
