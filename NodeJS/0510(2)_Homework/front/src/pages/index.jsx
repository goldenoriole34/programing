import axios from 'axios'

const Index = () => {

  const handleClick = async () => {
    const result = await axios.get('http://localhost:3500')
    alert(result.data)
  }
  return(
    <div>
      <button onClick={handleClick}>서버로 이동</button>
    </div>
  )

}

export default Index;
