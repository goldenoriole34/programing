import axios from 'axios'

const Index = () => {

  const handleClick = async () => {
    const result = await axios.get('http://localhost:3001')
    alert(result.data)
  }
  
  return(
    <button onClick={handleClick}>Back에 요청</button>
  )
}

export default Index

// 과제!!!
// handleClick 눌렀을 때 브라우저
// 요청 post로 보내고, getCookie axios
// router middleware -> 쿠키파서로 쿠키 생성,
// 응답을 줌
// res header set-cookie 정보 뜨게
// 브라우저 생성
// credential 참고하기