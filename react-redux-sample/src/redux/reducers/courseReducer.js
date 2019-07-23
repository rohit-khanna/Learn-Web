/**
 * Course Reducer
 * @param {*} state initialized to empty array as it will store array of courses 
 * @param {*} action 
 */
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];

    default:
      return state;
  }
}
