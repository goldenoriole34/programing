import React, { useState } from 'react'
import {Container,Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authenticateAction } from '../redux/actions/authenticateAction'

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(authenticateAction.login(id, password))
    navigate('/')
  }
  
  return (
    <Container>
      <Form onSubmit={(e)=>{onSubmit(e)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setId(e.target.value)}} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(e)=>{setPassword(e.target.value)}} >
          <Form.Label>PW</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login