import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Detail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async () => {
    
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data)
  }

  useEffect( ()=> {
    getProductDetail()
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          <img className='product-img' src={product? product.img : ""}></img>
        </Col>
        <Col>
          <div>{product? product.title : ""}</div>
          <div>{product? product.size : ""}</div>
          <div>{product? product.price : ""}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail
