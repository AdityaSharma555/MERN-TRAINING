import React from 'react'

const Card = (props) => {
  return (
    <div className='p-2 m-2 w-52 text-center {props.backgroundColor} shadow-xl rounded-lg text-white'>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Card;
