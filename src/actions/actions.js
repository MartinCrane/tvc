export const updateSources = (sources) => {
  return {
    type: "UPDATE_SOURCES",
    payload: sources
  }
}
export const updatePlaylists = (playlists) => {
  return {
    type: "UPDATE_PLAYLISTS",
    payload: playlists
  }
}
export const updateTitles = (playlists) => {
  return {
    type: "UPDATE_TITLES",
    payload: playlists
  }
}
export const updateFollowedPlaylists = (playlists) => {
  return {
    type: "UPDATE_FOLLOWED_PLAYLISTS",
    payload: playlists
  }
}
export const updateAccount = (account) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: account
  }
}
export const updateAccountRestore = (boolean) => {
  return {
    type: "UPDATE_ACCOUNT_RESTORE",
    payload: boolean
  }
}
