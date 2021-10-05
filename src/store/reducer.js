const defaultLogin = {
  isLogin: false
}

const reducer = (state = defaultLogin, action) => {
  if (action.type === 'LOGIN_STATE') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.isLogin = action.isLogin
    return newState
  }
  return state
}

export default reducer;