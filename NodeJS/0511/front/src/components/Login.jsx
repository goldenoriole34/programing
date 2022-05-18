import axios from 'axios'

const Login = (props) => {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { userid, userpw } = e.target
    
    try {
        const result = await axios.post('http://127.0.0.1:3500/user/login', {
        userid : userid.value,
        userpw : userpw.value
      }, {
        withCredentials : true,
      })
      const {response, error} =result.data
      if (error !== null) return alert(error)

      props.onClick()
      
        //promise 객체로 반환되니 asyne await 사용해야함
        // props.onClick()
        //back에 결과가 도착했을 때 가장 마지막에 실행
        console.log(userid + userpw)
    } catch (e) {
      alert('접속불량')
    }
  }

  return (
    <>
      <h2>로그인 화면</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="userid" />
        <input type="password" name="userpw" />
        <input type="submit" value="로그인" />
      </form>
    </>
  )
}

export default Login