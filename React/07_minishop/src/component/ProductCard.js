import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {

  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/detail/${item.id}`)
  }

  return (
    <div onClick={showDetail}>
      <img src={item ? item.img : ""}></img>
      <div>{item ? item.choice == true ? "MD Pick" : "" : ""}</div>
      <div>{item ? item.title : ""}</div>
      <div>{item ? "₩"+item.price : ""}</div>
      <div>{item ? item.choice == true ? "New" : "" : ""}</div>
    </div>
  )
}

export default ProductCard