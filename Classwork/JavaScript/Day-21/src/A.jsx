import React, { useContext } from 'react'
import { Data } from './App'
const A = () => {
  const data1 =   useContext(Data)
  return (
    <>
    <div>A</div>
    <h1>{data1}</h1>
    </>
  )
}

export default A