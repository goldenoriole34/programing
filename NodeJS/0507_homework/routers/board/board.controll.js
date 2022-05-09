const pool = require('../../db')

const list = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM board")
    res.render('board/list', {
      items : result
    })
  } catch(e) {
    console.log('글 목록 로딩 실패!!')
  }
}

const view = async (req, res) => {
  try {
    const [[result]] = await pool.query(`SELECT * FROM board WHERE idx = ${req.query.idx}`)
    console.log(result)
    res.render('board/view', {
      item : result
    })
  } catch (e) {
    console.log('글 페이지 로딩 실패!!')
  }
}


const update = (req, res) => {
  res.render('board/update')
}


const write = (req, res) => {
  res.render('board/write')
}


const writeAction = async (req, res) => {
  const {subject, name, content } = req.body;
  try {
    
    console.log(subject + name + content)
    await pool.query(`INSERT INTO board(subject, content, name) VALUES("${subject}", "${content}", "${name}")`)

    res.redirect(`/board/view?idx={idx}`)
  } catch (e) {
    console.log('새 글 등록 실패!!')
  }
}

// UPDATE board SET subject='asdf' WHERE idx=1
const updateAction = (req, res) => {
  res.redirect(`/board/list`)
}

const deleteAction = (req, res) => {
  res.redirect(`/board/list`, {

  })
}


module.exports = {
  list,
  view,
  update,
  write,
  writeAction,
  updateAction,
  deleteAction
}