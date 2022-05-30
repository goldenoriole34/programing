import React from 'react'
import { useSelector } from 'react-redux'
import { BoxOfBox } from './BoxOfBox'

export const Box = () => {
  let number = useSelector(state => state.number)
  return (
    <>
      <div>{number}</div>
      <BoxOfBox />
    </>
  )
}
