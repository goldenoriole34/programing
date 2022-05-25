import React from 'react'

export const Box = (props) => {

  const borderClass = () => {
    if (props.result == "WIN") {
      return "box_win"
    } else if (props.result == "LOSE") {
      return "box_lose"
    } else if (props.result == "TIE") {
      return "box_tie"
    }
  }
  return (
    <div className={borderClass()}>
      <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img}></img>
      <h2>{props.result}</h2>
    </div>
  )
}
