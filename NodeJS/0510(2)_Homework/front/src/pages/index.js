import axios from 'axios'

const Index = () => {

  const handleClick = async () => {
    const result = await axios.post('http://localhost:3001/getCookie',{
      name : "heidi3" },{
      withCredentials:'true' }
    ).then ( (res) => { console.log(res) }
    ).catch( (err) => { console.log(err) }
    )
  }
  
  return(
    <button onClick={handleClick}>Back에 전달</button>
  )
}

export default Index

// 과제!!!
// handleClick 눌렀을 때 브라우저에서 요청 post로 보내고, getCookie axios
// router middleware -> 쿠키파서로 쿠키 생성,
// 응답을 줌
// res header set-cookie 정보 뜨게
// 브라우저 생성
// credential 참고하기