export default (state={details: 'initial', accountRestore:false}, action) => {
  switch (action.type) {
    case "RESTORE_ACCOUNT":
      return { ...state, details: action.payload }
    case "UPDATE_ACCOUNT_RESTORE":
      return { ...state, accountRestore: action.payload }
    default:
      return state
  }
}
