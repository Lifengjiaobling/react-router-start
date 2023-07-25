const initialState = {
  themeName: "主题1"
}
function changeThemeReducer (state = initialState, action) {
  console.log(action,"action")
  switch (action.type){
    case "SET_THEME":
      return {
        ...state,
        themeName:action.payload
      }
    default:
      return state
  }
}
export default changeThemeReducer