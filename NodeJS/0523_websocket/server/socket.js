const webSocket = require('ws')

let sockets =[]

module.exports = (server) => {
  const wss = new webSocket.Server({ server })


  wss.on('connection', (ws, req) => {
    ws.id = req.headers['sec-websocket-key']
    sockets.push(ws)

    const obj1 = {type : 'message', payload : 'heidi님 환영합니다.'}
    const obj2 = {type : 'add', payload : '1'}

    ws.send(JSON.stringify(obj1))
    ws.send(JSON.stringify(obj2))

    ws.on('close', () => {
      console.log('사용자가 방을 나갔습니다')
      sockets = sockets.filter(v => {v.id !== ws.id})
    })
    console.log(sockets.length)

  })
  function boardcast(data, id){
    sockets.forEach( ws => {
      if( ws.id !== id){
        ws.send(data)
      }
    })
  }
}