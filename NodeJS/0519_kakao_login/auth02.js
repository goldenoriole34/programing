const express = require('express');
const app = express();
const cors = require('cors');
const nunjucks = require('nunjucks');
const axios = require('axios');
const qs = require('qs') // 쿼리스트링을 만들어주는 모듈 {a:asd, b:asd} => a=asd?b=asd

const client_id = '6275edbe6cd7389c45753a04904dfa5c'; // REST API 키 
const redirect_uri = 'http://localhost:3005/auth/kakao'; //redirect  
const client_secret = 'EDbq0tmzRcvY480jBpjRzq64XN0tYbVh'; //Client Secret

const host = 'https://kauth.kakao.com';

app.set('view engine', 'html')
nunjucks.configure('views', {
  express:app
});

app.use(cors());

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/kakao/login', (req, res)=> {
  const redirect = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
  res.redirect(redirect)
});

app.get('/auth/kakao', async (req, res)=>{
  // req.query.code
  const {query:{code}} = req //인가코드
  //요청 post = 1. url 2. body 3. headers
  const body = qs.stringify({
    grant_type : 'authorization_code',
    client_id, //한번만 입력 가능
    redirect_uri, //한번만 입력 가능
    code, //한번만 입력 가능
    client_secret //한번만 입력 가능
  })

  const headers = {'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8'}
  const response = await axios.post(`${host}/oauth/token`,body,headers)
  console.log(response.data)

  try { 
    const {access_token} = response.data;
    const url = 'https://kapi.kakao.com/v2/user/me'

    const userinfo = await axios.post(url, null, {
      headers : {
        "Authorization" : `Bearer ${access_token}`,
        "Content-type" : "application/x-www-form-urlencoded;charset=utf-8"
      }
    })

    console.log(userinfo.data)
  } catch (e){
  }

  res.send('hello')
})

app.listen(3005, ()=>{
  console.log('서버시작')
});