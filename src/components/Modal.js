import React from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component {

  selectTeam = (team) => {
    console.log("clicked " + team)
  }

  render() {
    return ReactDOM.createPortal(
      <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">
          <h1 className="middle">Select a Team:</h1>
          <div className="aligned center actions">
            <button onClick={() => this.selectTeam("Red")}
              alt="red" className="ui big red button">Red</button>
            <button onClick={() => this.selectTeam("Blue")}
              alt="blue" className="ui big blue button">Blue</button>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    )
  }
}

export default Modal
