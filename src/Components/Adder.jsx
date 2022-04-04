import React from 'react'

const Adder = (props) => {

    myProps = props.theFunction;
  return (
    <div>
    <button onClick={ (curr) => {myProps + 1 }}>Click
    </button>
    </div>
  )
}

export default Adder;