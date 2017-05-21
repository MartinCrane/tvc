export default (state={sources: []}, action) => {
  switch (action.type) {
    case "DISPLAY_SETTINGS_SOURCES":
      let newState = {sources: action.payload}
      return newState
    default:
      return state
  }
}
