# 리덕스는 왜 생겼나?
  전역상태로 관리하기 위해서 탄생
# 리덕스는 리액트에서 만들어진 것인가?
  아니다. 그래서 Node.js 환경에서 그냥 가능하다.
  npm install redux
  
  {
  __DO_NOT_USE__ActionTypes: {
    INIT: '@@redux/INIT3.t.i.g.j.w',
    REPLACE: '@@redux/REPLACE9.p.m.l.l.i',
    PROBE_UNKNOWN_ACTION: [Function: PROBE_UNKNOWN_ACTION]
  },
  applyMiddleware: [Function: applyMiddleware],
  bindActionCreators: [Function: bindActionCreators],
  combineReducers: [Function: combineReducers],
  compose: [Function: compose],
  createStore: [Function: createStore],
  legacy_createStore: [Function: createStore]
  }

  아래 4개가 리덕스의 핵심이다.
  - applyMiddleware
  - combineReducers
  - compose
  - createStore

  # createStore는 무엇인가?
  함수는 상태를 반환하고,
  상태를 바꿀 수 있는 함수도 반환한다.
  useState와 비슷하다. const [value, setValue] = useState()
  인자로 함수를 받는 것이 특징이다.
  기본적으로 내장되어 있는 것들이 있다.

  subscribe -> 몰라도 됨
  replaceReducer -> 몰라도 됨
  '@@observable' -> @ 붙는건 에약어 느낌?
===================================== 2개만 중요 
  dispatch -> 상태 변경 함수 -> 상태 바꿀때 사용
  getState -> 상태 저장 -> 주로 객체로 저장 { 모두 호출 }

  # 흐름
  dispatch 발동되면,
  reducer 발동되고,
  state가 발동됨

  + action값을 객체로 주는 이유는, 여러개의 value를 넣기 떄문이다.
  + 

  # combineReducers
  reducer를 쪼개서 관리하는 역할을 한다.
  그래서 라우터처럼 reducer를 분리하고 불러온다
  - 함수를 던지면 객체로 처리해주는 역할이다.

  # redux와 react-redux는 다르다
  - redux -> createStore -> store
  - react-redux
    : provider(최상단을 관리하는 역할, redux와 react-reducer의 값들을 combineStore에 담는 역할)
    : useSelector(=store.getState() 쉽게 쓰는거)
    : useDispatch(=store.dispatch() 쉽게 쓰는거)

  # 리덕스의 핵심은 리듀서를 잘 관리하는 것이다!



  # JWT
  지난번 구현한 코드는 jsonwebtoken을 설치하여 편하게 사용가능하다

  401번은 Unauthorization이다.

   jwt.verify()는 검증메서드
   토큰, 소금을 넣어준다.

   url 깔끔하게 사용하려고 params를 사용한다.
   내용물이 많은 경우에는 사용이 불편하다
