import React from 'react'

const Arrangement = (props) => {

  const styling = () => {
    switch (props.rack) {
      case 'target':
        return (
          <div>
            {"This is your enemy"}
          </div>
        )

      case 'base':
        return (
          <div>
            {"This is you"}
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
