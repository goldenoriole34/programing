import React, { useEffect,useState } from 'react'
import ProductCard from '../component/ProductCard'
import {Container, Row, Col} from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {

  const productList = useSelector( (state) => state.product.productList)
  const [query, setQuery] = useSearchParams()

  const dispatch = useDispatch()

  const getProducts = () => {
    let searchQuery = query.get('q') || ""
    // let url = `http://localhost:5000/products?q=${searchQuery}`
    // let response = await fetch(url)
    // let data = await response.json()
    // setProductList(data)
    dispatch(productAction.getProducts(searchQuery))

  }


  useEffect (()=>{
    getProducts()
  }, [query])

  return (
    <>
      {/* <ProductCard /> */}
      <Container>
        <Row>
          {productList.map( (item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Main