# Router

- https://reactrouter.com/docs/en/v6/getting-started/installation

  npm install react-router-dom@6

  App.js
  import { Routes, Route, Link } from "react-router-dom";
  
  index.js
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>

  About.js

    ## 페이지 이동 방식 2가지

    ### 1 (라우터 방식에서 사용할 때)
    <Link to="/">Go To HOME</Link><br />
    ### 2 리액트훅 (함수안에서 쓸 때)
    const navigate = useNavigate()
    const goToHomepage = () => {
      navigate('/')
    }

    <button onClick={goToHomepage}>Go To HOME</button>

  # Restful Route
    Representation State Transfer
    URL디자인 패턴이다
    이미지 참고
    Get - 정보를 가져옴
    Post - 새로운 데이터 생성
    Put - 기존 데이터 수정
    Delete - 데이터 삭제

    위 내용을 사용하면 URL이 간단하고 명확하게 구성될 수 있다.

    주로 URL에 paramiter값을 통해 여러개의 상세페이지를 연결할 수 있는 것이다.

    파라미터 값을 읽어오는 방법은 주로 리액트 훅 중 하나인 useParams를 사용한다.

    반대로 URL쿼리를 읽어올 수 있는 방법도 있다.
    
    쿼리와 파라미터의 차이
    쿼리는 변경되는 값들을 넣을 수 있는 것이고
    파라미터는 url의 경로가 설정되는 것이다.

    쿼리값을 읽어오는 것은 useSearchParams를 사용한다.


    가면 안되는 페이지, 페이지를 보호하는 법
    로그인 유저에게만 보이는 마이페이지 등이 있다.
    로그인사이트로 이동하게 하면 된다.

  리다이렉트는 Navigate라는 또다른 기능을 사용해야한다.

    const PrivateRoute = () => {
    return  authenticate == true? <UserPage /> : <Navigate to="/login" />
  }