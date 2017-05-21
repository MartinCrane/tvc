export default (state=['initial'], action) => {
  switch (action.type) {
    case "UPDATE_TITLES":
      return action.payload
    case "ADD_TITLE":
      let newState = state
      newState.push(action.payload)
      return newState
    default:
      return state
  }
}
