export default (state=[], action) => {
  switch (action.type) {
    case "UPDATE_PLAYLISTS":
      return action.payload
    default:
      return state
  }
}