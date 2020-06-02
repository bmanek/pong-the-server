// COMBINED REDUCER WIRING, COMMENTED OUT BELOW. CAUSED NESTED STATE PROBLEMS

// import { combineReducers } from 'redux'
// import teamReducer from './teamReducer'

// export default combineReducers({
//   teamDetails: teamReducer
// })

import { SET_TEAM } from '../actions/types'


const INITIAL_STATE = {
  playerName: null,
  allTeams: ["red", "blue"],
  team: null,
  oppTeam: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEAM:
      return { ...state, team: action.payload,
        oppTeam: state.allTeams.filter((team)=> team !== action.payload)[0]
      }
    default:
      return state
  }
}
