const defaultData = {
  loginState: false,
  admin: ''
}

const reducer = (state = defaultData, action) => {
  if (action.type === 'LOGIN_STATE') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.loginState = action.loginState
    newState.admin = action.admin
    return newState
  }
  return state
}

export default reducer;