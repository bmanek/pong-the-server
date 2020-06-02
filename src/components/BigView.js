import React from 'react'
import TeamField from './TeamField'

const BigView = () => {
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

export default BigView
