//board.controll.js
const items = [
  
]


const list = (req, res) => {   //함수
  res.render('board/list')
}

const view = (req, res) => {   //함수
  const {index} = req.query
  console.log(index) //값을 받아와 출력시키려면
  //볃교
  //   res.render('board/view', {
  //   item:items[index-1]
  // })
  // res.render('board/view')
}

const write = (req, res) => {   //함수
  res.render('board/write')
}


const modify = (req, res) => {   //함수
  res.render('board/modify')
}

const writeAction = (req, res)=> {
  console.log(req.body.subject, req.body.content); //그리고 
  const {subject, content} = req.body
  const obj = {subject, content}
  items.push(obj)
  items.length //1
  res.redirect(`/board/view?index=${items.length}`)

  // res.redirect('http://localhost:3000/board/view')
}

module.exports = { //함수를 객체에 담아 보내줌
  list,
  view,
  write,
  modify,
  writeAction,
}