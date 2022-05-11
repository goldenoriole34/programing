import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile';

function App() {

  const [isLogin, setIsLogin] = useState(false)

  const clickToggle = () => {
    setIsLogin(!isLogin)
  }
  
  return (
    <>
      { isLogin
        ? <Profile onClick={clickToggle}  />
        : <Login onClick={clickToggle} />
      }
    </>
  );
}

export default App;
