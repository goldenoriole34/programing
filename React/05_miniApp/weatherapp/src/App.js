// 1. 현재 위치 기반 날씨
// 2. 날씨정보 (도시, 섭씨, 화씨, 상태정보)
// 3. 5개 버튼 (현재위치, 타지역 4개)
// 4. 도시 버튼 클릭시 도시 별 날씨
// 5. 현재위치 버튼시 다시 현재위치 기반 정보 출력
// 6. 로딩스피너
// 19분

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { WeatherBox } from './component/WeatherBox';
import { WeatherButton } from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


function App() {

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('')
  const cites = ['Seoul', 'Tokyo', 'Paris']

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) =>{
    setLoading(true)
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0a68f54efd2a285fd30b91fb39ea9cc4&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
    setLoading(false)
  }

  const getWeatherByCity = async (lat, lon) => {
    setLoading(true)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a68f54efd2a285fd30b91fb39ea9cc4&units=metric`;
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data)
    setLoading(false)
  }

  useEffect( ()=> {
    if (city =="") {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  }, [city])


  return (
    <div>
      { loading ? (
        <div className='container'>
          <ClipLoader color={color} loading={loading} size={150} />
        </div>
      ) : (
        <div className='container'>
          <WeatherBox weather={weather} />
          <div>
            <WeatherButton getCurrentLocation={getCurrentLocation} cites={cites} setCity={setCity}/>
          </div>
        </div>
      )}
    </div>
  )}

export default App;
