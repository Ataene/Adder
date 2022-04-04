import React from 'react'

const Displayer = (props) => {

    const myData = props.value;

  return (

    <div>My data is {myData}</div>
  )
}

export default Displayer;