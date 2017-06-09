export default (state=[], action) => {
  switch (action.type) {
    case "RESTORE_SOURCES":
      return action.payload
    default:
      return state
  }
}
