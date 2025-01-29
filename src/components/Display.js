import React from 'react'

const Display = (props) => {
    const {text} = props;
  return (
    <div>
        <h2>{text}</h2>
    </div>
  )
}

export default Display;