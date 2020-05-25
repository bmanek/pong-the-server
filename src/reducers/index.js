// COMBINED REDUCER WIRING, COMMENTED OUT BELOW. CAUSED NESTED STATE PROBLEMS

// import { combineReducers } from 'redux'
// import teamReducer from './teamReducer'

// export default combineReducers({
//   teamDetails: teamReducer
// })

import { SET_TEAM } from '../actions/types'


const INITIAL_STATE = {
  playerName: null,
  team: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEAM:
      console.log("from the reducer")
      return { ...state, team: action.payload }
    default:
      return state
  }
}
