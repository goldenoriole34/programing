const crypto = require('crypto-js')

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

//Buffer.from('str')
// console.log(Buffer.from( JSON.stringify(header)) ) //16진수

// Buffer.from( JSON.stringify(header).toString('base64').replace('==','').replace('=','') )//64진수(아스키)

//코드가 기니 아래로

const encodingHeader = Buffer.from( JSON.stringify(header)).toString('base64').replace('==','').replace('=','') //64진수(아스키)
console.log("encodingHeader : "+ encodingHeader)

//디코딩
// const decodingHeader = JSON.parse( Buffer.from( encodingHeader, 'base64').toString() )
// console.log("decodingHeader : "+ decodingHeader)


const encodingPayload = Buffer.from( JSON.stringify(payload)).toString('base64').replace('==','').replace('=','')
console.log("encodingPayload : " + encodingPayload)



//sha256
crypto.SHA256(`${encodingHeader}.${encodingPayload}`) //해쉬값을 또 인코딩 해줘야함

const sigature = crypto.SHA256(`${encodingHeader}.${encodingPayload}`).toString()

const encodingsigature = Buffer.from( sigature ).toString('base64').replace('==','').replace('=','')

console.log( 'sha256 : ' + sigature)
console.log('encodingsigature' + encodingsigature)


