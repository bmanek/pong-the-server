import { SET_TEAM } from './types'

export const setTeam = (teamColor) => {
  return {
    type: SET_TEAM,
    payload: teamColor
  }
}
