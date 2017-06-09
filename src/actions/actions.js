export const restoreSources = (sources) => {
  return {
    type: "RESTORE_SOURCES",
    payload: sources
  }
}
export const restorePlaylists = (playlists) => {
  return {
    type: "RESTORE_PLAYLISTS",
    payload: playlists
  }
}
export const restoreTitles = (playlists) => {
  return {
    type: "RESTORE_TITLES",
    payload: playlists
  }
}
export const updateFollowedPlaylists = (playlists) => {
  return {
    type: "UPDATE_FOLLOWED_PLAYLISTS",
    payload: playlists
  }
}
export const restoreAccount = (account) => {
  return {
    type: "RESTORE_ACCOUNT",
    payload: account
  }
}
export const updateAccountRestore = (boolean) => {
  return {
    type: "UPDATE_ACCOUNT_RESTORE",
    payload: boolean
  }
}
export const updateSearch = (search_results) => {
  return {
    type: "SEARCH_RESULTS",
    payload: search_results
  }
}
