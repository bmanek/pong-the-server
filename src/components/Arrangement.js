import React from 'react'
import Cup from './Cup'

const Arrangement = (props) => {

  const styling = () => {
    switch (props.rack) {
      case 'target':
        return (
          <div>
            <div className="backrow">
              <Cup color={"red"}/>
              <Cup color={"red"}/>
              <Cup color={"red"}/>
            </div>
            <div className="midrow">
              <Cup color={"red"}/>
              <Cup color={"red"}/>
            </div>
            <div className="frontrow">
              <Cup color={"red"}/>
            </div>
          </div>
        )
      case 'base':
        return (
          <div>
            <div className="backrow">
              <Cup color={"blue"}/>
            </div>
            <div className="midrow">
              <Cup color={"blue"}/>
              <Cup color={"blue"}/>
            </div>
            <div className="frontrow">
              <Cup color={"blue"}/>
              <Cup color={"blue"}/>
              <Cup color={"blue"}/>
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
