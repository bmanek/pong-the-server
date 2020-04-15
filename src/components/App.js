import React from 'react'
import TeamField from './TeamField'

const App = () => {

    return (
      <div>
        <h2 className="ui aligned center header">Welcome to the Thunderdome</h2>
        <TeamField rack="target"/>
        <TeamField rack="base"/>
      </div>
    )
}

export default App
