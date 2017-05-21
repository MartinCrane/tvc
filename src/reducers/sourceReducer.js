export default (state=[], action) => {
  switch (action.type) {
    case "UPDATE_SOURCES":
      return action.payload
    default:
      return state
  }
}
