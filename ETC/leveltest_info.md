## 1. http 중 응답코드와 해당 메시지 내용에 대해 서술
  404 : 페이지 없음
  200 : 정상작동
  301 : redirect

## 2. 쿠키와 세션의 차이점
  쿠키 : 브라우저에 저장되는 값
  세션 : 서버의 메모리를 이용하여 저장하는 값
  ㄴ 쿠키와 세션이 저장하는 값에 대해 알아본다.

  ### 브라우저의 역할
    1. (주소창) URL 파트 ( req / 요청 )
    2. (주소창 밑) 서버 express 내 html 등 ( res / 응답 )
    3. 브라우저가 서버에 요청하여 서버로 부터 응답받는 파일 혹은 데이터 저장 ( 쿠키 )
      브라우저의 개발자도구 - 어플리케이션에서 쿠키값 확인 가능하다.

  #### Request message
    브라우저의 개발자도구 - 네트워크에서 확인 가능함
    request message
    GET (혹은 POST) / HTTP/1.1
    ex ) app.get('/')
    
  #### express의 역할
    message의 텍스트를 string.split()하여 method가 get인지 post인지 분류

  #### Request message를 만드는 것은 '브라우저'
    '브라우저가 서버에 요청하여 서버로 부터 응답받는 파일 혹은 데이터 저장 ( 쿠키 )' 한다고 하였는데 이 작업이 Requset message를 통해 이루어진다.
    console.log(req.headers)를 통해 확인 가능하다.


## 3. 


1 ~ 4 번
//https://github.com/ingoo-blockchain/level/blob/master/front/views/index.html