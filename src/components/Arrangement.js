import React from 'react'
import Cup from './Cup'

const Arrangement = (props) => {

  const styling = () => {
    switch (props.rack) {
      case 'target':
        return (
          <div>
            <div className="backrow">
              <Cup />
              <Cup />
              <Cup />
            </div>
            <div className="midrow">
              <div>
                <Cup />
                <Cup />
              </div>
            </div>
            <div className="frontrow">
              <Cup />
            </div>
          </div>
        )
      case 'base':
        return (
          <div>
            <div className="backrow">
              <i className="huge middle aligned blue icon trash" />
            </div>
            <div className="midrow">
              <i className="huge middle aligned blue icon trash" />
              <i className="huge middle aligned blue icon trash" />
            </div>
            <div className="frontrow">
              <i className="huge middle aligned blue icon trash" />
              <i className="huge middle aligned blue icon trash" />
              <i className="huge middle aligned blue icon trash" />
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
