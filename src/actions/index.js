import { SET_TEAM } from './types'

export const setTeam = (team) => {
  return {
    type: SET_TEAM,
    payload: team
  }
}
