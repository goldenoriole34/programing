import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Product = () => {
  const [query, setQuery] = useSearchParams()
  console.log(query.get("q"))
  return (
    <div>SHOW ALL Product</div>
  )
}
