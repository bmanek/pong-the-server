import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { setTeam } from '../actions'

class Modal extends React.Component {

  selectTeam = (team) => {
    this.props.dispatch(setTeam(team))
  }

  render() {
    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">
          <h1>Select a Team:</h1>
          <div className="actions">
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

export default connect()(Modal)

//PREVIOUS mapStateToProps(), connect()

// const mapStateToProps = (state) => {
//   console.log(state)
//   return { team: state.testTeam }
// }

// export default connect(mapStateToProps,
//   { setTeam })(Modal)
