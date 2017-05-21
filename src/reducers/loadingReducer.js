export default (state='', action) => {
  switch (action.type) {
    case "LOADING":
      return action.payload 
    default:
      return state
  }
}
