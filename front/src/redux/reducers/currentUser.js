const initialState = {
  currentUser: {
    user: 0
  }
};

function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload
    case "LOGOUT":
      return initialState;
    case "GET_MENTORS":
      return {...state, mentors: action.payload};
    case "GET_MENTEES":
      return {...state, mentees: action.payload};
    case "SET_SKILLS_TO_LEARN":
      return {...state, skillsToLearn: action.payload}
    case "SET_SKILLS_TO_TEACH":
      return {...state, skillsToTeach: action.payload}
    case "UPDATE_SKILLS_TO_LEARN":
      return {...state, skillsToLearn: action.payload}
    case "UPDATE_SKILLS_TO_TEACH":
      return {...state, skillsToTeach: action.payload}
    default:
      return state;
  }
}
export default currentUserReducer;