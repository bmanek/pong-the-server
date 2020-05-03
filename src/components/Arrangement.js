import React from 'react'
import Cup from './Cup'

const Arrangement = (props) => {

  const styling = () => {
    switch (props.rack) {
      case 'target':
        return (
          <div>
            <div className="backrow">
              <Cup color={"red"} id={1}/>
              <Cup color={"red"} id={2}/>
              <Cup color={"red"} id={3}/>
            </div>
            <div className="midrow">
              <Cup color={"red"} id={4}/>
              <Cup color={"red"} id={5}/>
            </div>
            <div className="frontrow">
              <Cup color={"red"} id={6}/>
            </div>
          </div>
        )
      case 'base':
        return (
          <div>
            <div className="backrow">
              <Cup color={"blue"} id={12}/>
            </div>
            <div className="midrow">
              <Cup color={"blue"} id={11}/>
              <Cup color={"blue"} id={10}/>
            </div>
            <div className="frontrow">
              <Cup color={"blue"} id={9}/>
              <Cup color={"blue"} id={8}/>
              <Cup color={"blue"} id={7}/>
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
