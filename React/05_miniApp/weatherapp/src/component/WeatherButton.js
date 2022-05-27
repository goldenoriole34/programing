import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap';

export const WeatherButton = ({cites, setCity, getCurrentLocation}) => {
  return (
    <>
      <Button variant="secondary" onClick={()=>{getCurrentLocation()}}>
        Current Place
      </Button>

      {cites.map((item, index)=> (
      <Button variant="secondary"
        key={index}
        onClick={()=>{setCity(item)}}>
        {item}
      </Button>
      ))}
    </>
  )
}
