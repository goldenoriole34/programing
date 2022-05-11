// const crypto = require('crypto-js')
const crypto = require('crypto')

//header 
const header = {
  "alg": "HS256",
  "typ": "JWT"
}
//payload
const payload = {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}


//디코딩
// const decodingHeader = JSON.parse( Buffer.from( encodingHeader, 'base64').toString() )
// console.log("decodingHeader : "+ decodingHeader)

// const encodingHeader =  Buffer.from( JSON.stringify(header))
//                               .toString('base64')
//                               .replace('==','')
//                               .replace(/[=]/g,'')//64진수(아스키)

// console.log("인코딩-헤더 : "+ encodingHeader)



// const encodingPayload = Buffer.from( JSON.stringify(payload))
//                               .toString('base64')
//                               .replace(/[=]/g,'')

// console.log("인코딩-페이로드 : " + encodingPayload)



// const salt = 'ingoo'//salt는 암호규칙을 한층 더 강화하는 역할을 함
// const cryptoSigature = crypto.createHmac('sha256', salt) 
//                       .update(`${encodingHeader}.${encodingPayload}`)
//                       .digest('base64')
//                       .replace(/[=]/g,'')

// const encodingCryptoSigature =  Buffer.from(cryptoSigature)                                  //인코딩한 해쉬 값
//                                       .toString('base64')
//                                       .replace('==','')
//                                       .replace('=','') 


// // console.log( '단방향-sha256 : ' + sigature)
// console.log('크립토인코딩-시그니처 : ' + encodingCryptoSigature)
// console.log(`크립토 버전으로 한번에 : ${encodingHeader}.${encodingPayload}.${encodingCryptoSigature}`)


const encoding = (value) => {
  return  Buffer.from( JSON.stringify(value))
                .toString('base64')
                .replace(/[=]/g,'')
}

//토큰을 만들어주는 함수
const createToken = (state) => {
  const salt = 'ingoo'
  const header = {"alg": "HS256","typ": "JWT"}
  const payload = {...state}

  const encodingHeader = encoding(header)
  const encodingPayload = encoding(payload)
  const encodingSigature = crypto.createHmac('sha256', salt)
                                  .update(`${encodingHeader}.${encodingPayload}`)
                                  .digest('base64')
                                  .replace(/[=]/g,'')
  return `${encodingHeader}.${encodingPayload}.${encodingSigature}`
}


createToken( { name : 'ingoo', age : 33 } )



//jwt토큰 만드는 함수 구현완료!!


module.exports = createToken