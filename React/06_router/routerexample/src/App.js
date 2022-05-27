import './App.css';
import { Homepage } from './page/Homepage';
import { Aboutpage } from './page/Aboutpage';
import { Product } from './page/Product';
import { ProductDetail } from './page/ProductDetail';
import { LoginPage } from './page/LoginPage';
import { UserPage } from './page/UserPage';
import { Routes, Route, Navigate } from "react-router-dom";
import {useState} from "react"

function App() {

  const [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute = () => {
    return  authenticate == true? <UserPage /> : <Navigate to="/login" />
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id/:num' element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />

      </Routes>
    </div>
  );
}

export default App;
