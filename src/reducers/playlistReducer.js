export default (state={createdPlaylists: ['initial'], followedPlaylists:['initial']}, action) => {
  switch (action.type) {
    case "UPDATE_PLAYLISTS":
      
      return { ...state, createdPlaylists: action.payload }
    case "UPDATE_FOLLOWED_PLAYLISTS":
      return { ...state, followedPlaylists: action.payload }
    default:
      return state
  }
}
