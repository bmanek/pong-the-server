import React from 'react'
import TeamField from './TeamField'

import { connect } from 'react-redux'


const BigView = (props) => {
  console.log(props, "from BigView")
  return(
    <React.Fragment>
      <br />
      <h2 className="ui aligned center header">Welcome to the Thunderdome</h2>
      <br />
      <br />
      <TeamField rack="target" color="!team"/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <TeamField rack="base" color="team"/>
    </React.Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    team: state.team,
    oppTeam: state.oppTeam
  }
}

export default connect(null, mapStateToProps)(BigView)
