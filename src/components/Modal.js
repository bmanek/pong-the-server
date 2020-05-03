import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <h1>Select a Team:</h1>
        <button alt="red">Red</button>
        <button alt="blue">Blue</button>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal
