import { SET_TEAM } from './types'

export const setTeam = (team) => {
  console.log(team, "from setTeam")
  return {
    type: SET_TEAM,
    payload: team
  }
}
