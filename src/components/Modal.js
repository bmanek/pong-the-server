import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <h1 className="middle">Select a Team:</h1>
        <div className="aligned center actions">
          <button alt="red" className="ui big red button">Red</button>
          <button alt="blue" className="ui big blue button">Blue</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal
