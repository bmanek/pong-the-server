import React from 'react'
import TeamField from './TeamField'

const App = () => {

    return (
      <div>
        <br />
        <h2 className="ui aligned center header">Welcome to the Thunderdome</h2>
        <br />
        <br />
        <TeamField rack="target"/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <TeamField rack="base"/>
      </div>
    )
}

export default App
