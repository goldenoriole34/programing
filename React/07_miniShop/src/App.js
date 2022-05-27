// 1. 전체상품페이지, 로그인페이지, 상품상세페이지
// 1-1. 네비게이션 바 제작
// 2. 전체상품페이지 : 전체상품 나열
// 3. 로그인 버튼을 누르면 로그인페이지
// 4. 상품디테일 페이지 접근시 로그인여부 확인 후 로그인 or 상품디테일 페이지 이동
// 5. 로그아웃 버튼 클릭 시 로그아웃 처리
// 6. 로그아웃 상태에서도 상품디테일 페이지 조회 불가능, 로그인페이지 이동
// 7. 로그인 시 로그아웃버튼 출력, 로그아웃시 로그인 버튼 출력
// 8. 상품조회 기능
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main"
import { Login } from "./pages/Login"
import { Detail } from "./pages/Detail"
import { NavBar } from "./components/NavBar";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivitDetail = () => {
  return
}

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
