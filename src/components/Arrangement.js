import React from 'react'

const Arrangement = (props) => {

  const styling = () => {
    switch (props.rack) {
      case 'target':
        return (
          <div>
            <div className="backrow">
              <i className="huge middle aligned icon trash" />
              <i className="huge middle aligned icon trash" />
              <i className="huge middle aligned icon trash" />
            </div>
            <div className="midrow">
              <i className="huge middle aligned icon trash" />
              <i className="huge middle aligned icon trash" />
            </div>
            <div className="frontrow">
              <i className="huge middle aligned icon trash" />
            </div>
          </div>
        )
      case 'base':
        return (
          <div>
            <div className="backrow">
              <i className="huge middle aligned icon trash" />
            </div>
            <div className="midrow">
              <i className="huge middle aligned icon trash" />
              <i className="huge middle aligned icon trash" />
            </div>
            <div className="frontrow">
              <i className="huge middle aligned icon trash" />
              <i className="huge middle aligned icon trash" />
              <i className="huge middle aligned icon trash" />
            </div>
          </div>
        )
    }
  }

  return (
    <div>
      {styling()}
    </div>
  )
}

export default Arrangement
