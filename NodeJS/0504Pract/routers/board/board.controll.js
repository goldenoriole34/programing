const list = (req, res) => {
  res.render('board/list')
}

const view = (req, res) => {
  res.render('board/view')
}

const update = (req, res) => {
  res.render('board/update')
}

const write = (req, res) => {
  res.render('board/write')
}

const writeAction = (req, res) => {
  res.redirect('/board/view')
}

const updateAction = (req, res) => {
  res.redirect('/board/view')
}

const deleteAction = (req, res) => {
  res.redirect('/board/list')
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