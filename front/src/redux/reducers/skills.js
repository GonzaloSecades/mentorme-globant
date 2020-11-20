const initialState = [];

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SKILLS_LIST":
      return action.payload
    case "ADD_SKILL":
      return [...state, action.payload]
    case "REMOVE_SKILL":
      return action.payload
    case "ADD_CATEGORY":
      return
    case "REMOVE_CATEGORY":
      return
    default:
      return state;
  }
}
export default skillsReducer;