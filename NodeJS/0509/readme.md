우리는 하나의 homa라는 파일에 board라는 시트를 만들어 3개의 레코드를 만들어둔 상태이다.
이제 js로 mysql 안에 저장되어 있는 데이터를 console.log로 찍어줘본다.



우리가 인터넷을 할때 여러번 클릭하면 바로 정보가 나오니 한번 연결하면 쭉 되는줄 알고 있지만 사실 클릭 할때마다 연결하여 정보를 받아오는 것이다.

그치만 연결과 통신은 다르다

기본적으로 디비와 웹서버를 연결할때는 ㅡhttp처럼 한번의 요청 한번의 응답이 아니다.

연결은 통화 연락
통신은 메세지를 보내놓는 것과 같다.

웹서버와 디비서버는 연결해둔다고 생각해야하다.
연결작업을 해줘야한다.

한번 연결 후 통신이 이뤄진다.


?????????????????????????????????????/




연결의 과부하를 방지하기 위한 기능이 있다.

웹서버와 디비서버는 연결을 해두고
js는 위 서버들과 통신을 한다고 생각하면 된다.




restfull api에서 우리는 get과 post를 주로 사용한다.
put path delete 등이 있는 이유는 url을 줄이기 위해 사용한다.

노드js -> ssr 방식
리액트 -> csr 방식

idx ==> pk


로그인이란?
로그인에 사용되는 주요기능
로그인에는 보통 세션과 쿠키가 등장한다.
세션과 쿠키의 각 장단점이 있다. 무엇이 더 좋고 나쁘다고 생각할 수 없다.
(선입견을 가지지 않도록 한다.)

로그인을 화면적으로 표현했을 때,
사진1)
브라우저의 로그인창, 인풋박스 2개 그리고 버튼구성하여
로그인정보를 post로 백으로 보낸다
그러나 화면을 이동을 하면
로그인 정보가 날아가버린다.
로그인 정보를 브라우저(쿠키)나 서버(세션)이 보관할 수 있도록 해야한다.

참고) 세션도 쿠키가 생성된다!
  세션은 변수에 저장하는 것이다.
  (세션 예시)
  const session = {
    web77 : true,
    heidi : tuee,
  }
  브라우저는 a가 요청을 보내면 a의 정보를 모르기 때문에
  세션쿠키를 통해 확인한다.
  결국 세션도 구분값을 쿠키로 활용한다는 것이다.

그러므로 쿠키를 먼저 이해하는 것이 필요하다.


유저의 로그인 정보를 계속 저장해야 하기 때문에 URL에 저장할 수 있지만 보안에 좋지 않기 때문에
쿠키를 사용한다. 즉 쿠키/세션을 통해 URL를 단축시킬 수 있다.


(오늘의 목적 = 쿠키 마스터!!!! 그 후 라우터 next() 활용도 해보자!, next과 왜 필요한지 볼 예정)

로그인 스킬의 궁극적인 목표는 URL에 아무런 값을 주지 않고 다른 미들웨어에 값을 공유하는 것임


2) 설명
app.get('/setCookie', (req, res) => {
  res.sendHeader(`Set-Cookie`, 'name = heidi')
  res.send('hello setCookie')
})

req는 브라우저의 요청하는 내용
res는 서버가 응답하는 내용
res.setHeader는 res.message의 내용을 수정해서 보낼 수 있다
보내면
전체 페이지 req.message에 cookie값이 생긴다!!!

쿠키는 js나 res.massage에
Set-cookie : key = value 로 값을 브라우저에 보내면
브라우저는 메세지들을 모두 잘라 cookie를 key value 값을 저장해둔다 그리고 모든 페이지 message에 보내주기 때문에
URL을 모두 찍을 필요가 없고
Header에서 가져와 사용하면 되는 것이다.


쿠키에는 여러 옵션이 있다.
화살표의 내역들은 조금 중요하다.

옵션1)
  쿠키의 보안이 약하다는 의견이 있다
  콘솔에 cookie만 찍어도 나오기 때문이다.
  그러나 화살표의 내역 중 http only를 선택해주면 검색되지 않는다
  (js로 쿠키를 조작할 수 없게 하는 것이다.)

  http 통신프로토콜에서
  Set-Cookie에 대한 문법이 따로 있어 문법만 지켜 작성하면
  httpOnly 처리를 할 수 있다.
      .setHeader('Set-Cookie', 'name=heidi; httpOnly=true')

옵션2)
  로그인을 했을 때 5분 뒤에 로그인을 풀리게 하는 방법도 있다.
  5분뒤에 쿠키가 사라지게 하면 된다.
  MAx-age : 짧은시간 5~10분 조정
  추가) Expires : 기간적으로 설정 (팝업창 7일동안 안보기 등)

  1초 = 1000ms 이니
  60 = 1000

      .setHeader('Set-Cookie', 'name=heidi; httpOnly=true Expires=+time')
  페이지를 띄우면 세션값에 날짜형식으로 작성된 것을 볼 수 있다.

옵션3)
  path는 특정 쿠키를 특정페이지에서만 사용할 수 있는 기능이다.
  사용빈도가 낮긴하나 알아두도록 한다.
  디폴트는 path=/이다.


실습)
내가 요청으로 들어온 쿠키를 사용하는 것을 어디 라우터이든 가져오고 싶다면
미들웨어의 next를 사용한다
next는 다음 미들웨어까지 실행한다. 그러므로 다음 미들웨어에 쿠키를 호출하면 현재 미들웨어만 실행해도 쿠키값을 찍는다
다만 값을 가져올수는 없기 때문에 req.cookie라는 속성을 만들어 값을 복사해 가져오는 것이다.
그리고 그것을 split로 만들어 객체로 정리해 담을 수 있다.
또 trim을 통해 공백을 없앤다



reducer는 배열상태를 객체로 변환할때만 사용한다 ( 데이터 타입을 변환할때 )

리듀서 공부하기!!!!!
map((value, key)=> {})   //인자값이 콜백함수 하나임
reducer( (이전값, value)=>{}, 0) //인자값이 두개임 ,0이 들어감?!?!?!

  //cookie-parser 상세
  // const cookies = cookie
  //                 .split(";")
  //                 .map( (value) => value.trim().split("=")
  //                 .reduce( (acc, val) => {
  //                   [val[0]]=val[1]
  //                   return acc
  //                 }, {}) )
