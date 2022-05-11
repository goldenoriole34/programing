import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {useState} from 'react'

//조건부 랜더링
//상태가 true일때 Profile컴포넌트, false Login컴포넌트
//삼항연산자를 사용한다.

function App() {

  const [isLogin, setIsLogin] = useState(false)

  const clickToggle = () => {
    setIsLogin(!isLogin) // 기존값을 반대로 바꿔줌
  }

  return (
    <>
      {
        isLogin
        ? <Profile onClick = { clickToggle } />
        : <Login onClick = { clickToggle } />
      }
    </>
  );
}

export default App;
