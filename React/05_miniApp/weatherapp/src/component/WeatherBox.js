import React from 'react'

export const WeatherBox = ({weather}) => {
  const celsius = Math.floor(weather?.main.temp)
  const Fahrenheit = (celsius * 9/5) + 32
  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h2>{celsius}°C / {Fahrenheit}°F</h2>
      <h3>{weather?.weather[0].main}</h3>
    </div>
  )
}

