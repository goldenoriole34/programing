import React from 'react'

export const Box = (props) => {
  return (
    <>
    <div className="box">
      Box{props.num}
      <p>{props.name}</p>
    </div>
    </>
  )
}
