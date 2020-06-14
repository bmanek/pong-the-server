import React from 'react'
import Modal from './Modal'
import BigView from './BigView'
import { connect } from 'react-redux'

// I forgot how to access props with Redux. That's the current problem.

const App = (props) => {
  console.log(props, "from App.js")
    return (
      <div>
        <Modal />
        <BigView />
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    team: state.team,
    oppTeam: state.oppTeam
  }
}

export default connect(null, mapStateToProps)(App)
