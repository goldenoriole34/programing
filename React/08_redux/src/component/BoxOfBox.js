import React from 'react'
import { useSelector } from 'react-redux'

export const BoxOfBox = () => {
  let number = useSelector(state => state.number)
  return (
    <div>{number}</div>
  )
}
