import React from 'react'

export const Box = (props) => {
  return (
    <div className={props.class}>
      <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img}></img>
      <h2>{props.result}</h2>
    </div>
  )
}
