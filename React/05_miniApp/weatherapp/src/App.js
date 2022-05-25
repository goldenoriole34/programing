import './App.css';
import { useEffect, useState } from 'react'
// 1. 현재 위치 기반 날씨
// 2. 날씨정보 (도시, 섭씨, 화씨, 상태정보)
// 3. 5개 버튼 (현재위치, 타지역 4개)
// 4. 도시 버튼 클릭시 도시 별 날씨
// 5. 현재위치 버튼시 다시 현재위치 기반 정보 출력
// 6. 로딩스피너

function App() {
  // 디폴트 : 현재위치 날씨 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      console.log("현재위치", lat, lon)
    })
  }


  useEffect( ()=> {
    getCurrentLocation()
  }, [])

  return (
    <div>
      안녕
    </div>
  );
}

export default App;
