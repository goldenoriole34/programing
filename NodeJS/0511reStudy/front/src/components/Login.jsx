import axios from 'axios'

const Login = (props) => {

  const handleSubmit = async(e) => {
    e.preventDefault()

    const { userid, userpw} = e.target

    try {
      const result = await axios.post('http://localhost:3500/user/login',{
        userid : userid.value,
        userpw : userpw.value
      },{
        withCredentials : true
      })
      console.log(result)
      const {response, error} = result.data
      // console.log(response, error)
      if(error !== null) return alert(error)

      props.onClick()

    } catch(e){
      alert('접속불량')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <h2>로그인 화면</h2>
    <input type="text" name="userid" />
    <input type="password" name="userpw" />
    <input type="submit" value="로그인" />
  </form>
  )
}

export default Login