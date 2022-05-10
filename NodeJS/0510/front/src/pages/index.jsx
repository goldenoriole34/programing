import axios from 'axios'

const Index = () => {

  const onClick = async () => {
    const result = await axios.get('http://localhost:3500')
    alert(result.data)
  }

  return(
    <div>
      <button onClick={onClick}>서버에게 요청</button>
    </div>
  )
}

export default Index;