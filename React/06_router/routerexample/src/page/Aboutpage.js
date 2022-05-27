import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Aboutpage = () => {
  const navigate = useNavigate()
  const goToHomepage = () => {
    navigate('/')
  }
  return (
    <>
      <div>About</div>
      <Link to="/">Go To HOME</Link><br />
      <button onClick={goToHomepage}>Go To HOME</button>
    </>  )
}
