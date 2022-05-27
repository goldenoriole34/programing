import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  const { id, num } = useParams()
  return (
    <>
      <div>ProductDetail</div>
      id : {id} <br />
      pw : {num}
    </>
  )
}
