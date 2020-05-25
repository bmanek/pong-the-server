import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { setTeam } from '../actions'

class Modal extends React.Component {

  selectTeam = (team) => {
    console.log(team, "from selectTeam")
    setTeam(team)
  }

  render() {
    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">
          <h1 className="middle">Select a Team:</h1>
          <div className="aligned center actions">
            <button onClick={() => this.selectTeam("red")}
              alt="red" className="ui big red button">Red</button>
            <button onClick={() => this.selectTeam("blue")}
              alt="blue" className="ui big blue button">Blue</button>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state, "in mapStateToProps")
  return { team: state.teamDetails }
}

export default connect(mapStateToProps,
  { setTeam })(Modal)
