import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Homepage = () => {
  const navigate = useNavigate()
  const goToProductPage = () => {
    navigate('/products?q=pants')
  }
  return (
    <>
      <div>HOME</div>
      <Link to="/about">Go To A</Link> <br />
      <button onClick={goToProductPage}>go to product page</button>
    </>
  )
}
