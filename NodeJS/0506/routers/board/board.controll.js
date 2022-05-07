const pool = require('../../db')

const list = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM board")
    console.log(result)
    res.render('board/list', {
      items:result,
    })
  } catch (e) {
    console.log('에러발생')
  }
}


const view = (req, res) => {
  res.render('board/view')
}
const write = (req, res) => {
  res.render('board/write')
}
const update = (req, res) => {
  res.render('board/update')
}
const writeAction = (req, res) => {
  res.redirect(`/board/list`)
}
const updateAction = (req, res) => {
  res.redirect(`/board/view`)
}
const deleteAction = (req, res) => {
  res.redirect(`/board/list`)
}

module.exports = {
  list,
  view,
  write,
  update,
  writeAction,
  updateAction,
  deleteAction
}