import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'

export const Main = () => {
  const [productList, setProductList] = useState('')
  const getProducts = async () => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <>
      <Container>
        <Row>
          {productList.map((menu)=>{<Col lg={3}><ProductCard /></Col>  
          })}
        </Row>

      </Container>
      
    </>
  )
}
