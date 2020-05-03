import React from 'react'

const Cup = (props) => {

  function discard(e) {
    e.preventDefault();
    console.log(props.color, props.id)
  }

  return (
    <React.Fragment>
      <i onClick={discard}
        className={`huge middle aligned ${props.color} icon trash`} />
    </React.Fragment>
  )
}

export default Cup
