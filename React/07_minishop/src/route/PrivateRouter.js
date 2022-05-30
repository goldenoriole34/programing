import React from 'react'
import Detail from '../page/Detail'
import Login from '../page/Login'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({authenticate}) => {
  return (
    authenticate == true ? <Detail /> : <Navigate to="/login" /> 
  )
}

export default PrivateRouter
