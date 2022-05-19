passport를 하는 경우,
라우터에 기본 미들웨어를 변수대입하는 경우가 있는데 생소하지만 가능하다는 것을 염두에 두고 공부하는 것이 필요하다.
  const auth = (req, res) => {
    res.rend('hello')
  }

우리가 사용하는 프로토콜 : http / https / ws

URL체계에서 auth는 host
host = (protocol + ( auth ) + hostname + port) = 

우리가 사용하는 URL형식은 이렇다
http://localhost:3000

원래 http://www.heidi:123@localhost:3000 였는데 auth가 생략가능해진 상태이다. (@앞으로 id:pw)
이렇게 쓰면 header의 authorization 정보가 추가된다.

postman 통해 http://heidi:123@localhost:3000 입력하면,

authorization: 'Basic aGVpZGk6MTIz'을 조회할 수 있다.
Authorization : type : credential
credential을 아이디:패스워드를 한다음 base64로 처리하기 떄문에 보고 싶다면 디코딩처리 해야한다.

과거에는 썼지만 최근 트렌드는 authorization이 아닌 토큰을 사용한다.

+
보통 router에서 유저를 검증할 수 있는 코드를 넣는데,
최근에는 검증용 서버를 따로 만드는 경우가 생겼다.
ex) 회원만 이용가능한 게시판 구현 시
  클라이언트   |   프론트   |  백    |  (auth)
  쿠키     ->     화면
  쿠키     <-     화면
  data request---------> cookie 검증
  data request<--------- cookie

  일반적인 구조에서 쿠키를 검증하는 경우는 로그인때 한번 하는 경우가 많아 서버를 따로 만들어 관리할 수 있게 하는 기능이다.

auth를 구현하는 방법이 OAuth2.0 -> authorization / JWY / CORS
OAuth2.0는 결국 기존의 방식을 합친 것이다.



# OAth2.0를 통한 카카오 로그인
Browser | OUR_express_server | KAKAO_Auth_server
사용자가 브라우저와 우리서버에 카카오 정보를 알리지 않고
카카오 서버와 사용자가 서로 인증하고 결과만 우리서버로 전달하는 것이다.

결국 간단 로그인은 보안을 위한 것이던 것이다...!


# 브라우저 관련 추가
User | Browser | ExpressServer | AuthServer

사용자가 브라우저에서 간편로그인을 선택하면 포트를 통해 백엔드에 요청을 보낸다. 그럼 서버는 카카오에서 받아둔 링크를 redirect로 응답한다. 그렇게 브라우저는 우리서버를 거치지 않고 바로 카카오Auth서버로 들어간다. 거기서 id pw를 입력하여 인증하면,
카카오Auth서버가 확인작업을 거쳐 ExpressServer에 내용을 전달해주고,
ExpressServer는 특정 결과물(JWT토큰)을 카카오Auth서버로부터 받는다. 받고 다시 Kakao서버에 사용자의 공개가능한 특정정보(그래서 카카오로그인 시 개인정보 동의를 받는것이다!)를 요청하여 사용자의 정보를 객체형태로 받고, 로그인처리가 되는 것이다.

카카오Auth서버는 아무 도메인이나 주면 안되기 때문에 카카오Auth서버는 CORS처리를 해줘야 하는 것이다.

# 방법
- https://developers.kakao.com/ 접속하여 로그인
- 상단 내애플리케이션 접속
- 애플리케이션 추가
- 이미지는 이후 사용할 사이트의 대표이미지를 등록해야한다.
  앱이름 : TEST / 사업자명 : TEST
- 생성 후 애플리케이션 접속
  - 우리는 REST API 키만 필요하다.
  - REST API 키 :	6275edbe6cd7389c45753a04904dfa5c
- 플랫폼 설정하기 접근
  - Android / iOS / Web 중 우리는 Web만 선택
  - 사이트 도메인 입력 후 저장 http://localhost:3005 (CORS 처리 한다는 것을 암시한다)
  - Redirect URI 등록한다.
    - 백엔드에서 받을 주소를 입력한다.
    - http://localhost:3005/auth/kakao 로 받을 예정이다
  - 활성화 처리를 반드시 해줘야한다 카카오에서 제공하는 API 다양해서 개별적으로 활성화 시켜줘야 하기 때문이다.
- 보안탭 접근 (필수는 아니지만 보안상 하자. 카카오 권장사항이다)
  - 코드 생성한다.
    - Client Secret : EDbq0tmzRcvY480jBpjRzq64XN0tYbVh
  - 활성화 처리한다.
- 동의항목 접근
  - 카카오에서 받아올 수 있는 정보를 선택하는 곳이다.
  - 닉네임, 프로필사진을 용도를 입력하여 필수항목으로 수정해준다
  - 그 외 선택동의도 임의로 설정해준다.

- 문서 > 카카오로그인 > REST API 접속하여 사용방법 숙지
  1) 인가코드 받기
  add) 
  요청코드 - GET /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code HTTP/1.1
  
  이후 코드 참고

  2) 토큰 받기


  로그인성공!!!!
  카카오 쿠키가 발생한 이후로는 로그인 시 바로 패스된다


  카카오톡 ...탭/ 상단 메뉴에 톱니바퀴 클릭 / 개인및 보안/ 개인정보 관리/ 카카오 계정 및 연결된 서비스 / 연결된 서비스 관리 / 외부 서비스 들어가면 기기연동해제?? 가능하다