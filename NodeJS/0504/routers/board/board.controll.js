//board.controll.js

const list = (req, res) => {   //함수
  res.render('board/list')
}

const view = (req, res) => {   //함수
  let name = req.query.name
  res.render('board/view', {
    name : name
  })
}

const write = (req, res) => {   //함수
  res.render('board/write')
}


const modify = (req, res) => {   //함수
  res.render('board/modify', {
    name : req.query.name
  })
}

const writeAction = (req, res)=> {
  res.render('board/view')
}

const modifyAction = (req, res)=> {
  res.redirect(`/board/view?name=${req.body.name}`)
}

const deleteAction = (req, res)=> {
  res.render('board/delete')
}

module.exports = { //함수를 객체에 담아 보내줌
  list,
  view,
  write,
  modify,
  writeAction,
  modifyAction,
  deleteAction
}