import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
      <img src={item?.img} />
      <div>Consiuse choice</div>
      <div>{item?.title}</div>
      <div>\{item?.price}</div>
      <div>{item?.choice}</div>
      <div>신제품</div>
    </div>
  )
}

export default ProductCard