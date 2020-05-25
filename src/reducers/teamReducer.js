// USING AN INDEX/REDUCER CAUSES NESTED STATE PROBLEMS


// import { SET_TEAM } from '../actions/types'
//
//
// const INITIAL_STATE = {
//   playerName: null,
//   team: null
// }
//
// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SET_TEAM:
//       return { ...state, teamDetails: action.payload }
//     default:
//       return state
//   }
// }


// CURRENT PROBLEM: UNABLE TO MODIFY STATE THRU MODAL BUTTONS.
// IDEALLY: BUTTONS CHANGE STATE TO CORRESPONDING TEAM, THEN MODAL DISAPPEARS
// AND PAGE RERENDERS ELEMENTS ACCORDINGLY
