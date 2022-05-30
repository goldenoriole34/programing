import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './page/Main'
import Login from './page/Login'
import Detail from './page/Detail'
import NavBar from './component/NavBar';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import PrivateRouter from './route/PrivateRouter';

function App() {
  const [authenticate, setAuthenticate] = useState('false')

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
      <Route path='/detail/:id' element={<PrivateRouter authenticate={authenticate} />} />
    </Routes>
    </>
  );
}

export default App;
