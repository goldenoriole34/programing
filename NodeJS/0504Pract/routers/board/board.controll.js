const list = (req, res) => {
  res.render('board/list'), {
    name : req.query.name
  }
}

const view = (req, res) => {
  res.render('board/view', {
    name : req.query.name
  })
}

const update = (req, res) => {
  res.render('board/update', {
    name : req.query.name
  })
}

const write = (req, res) => {
  res.render('board/write')
}

const writeAction = (req, res) => {
  res.redirect('/board/view')
}

const updateAction = (req, res) => {
  res.redirect(`/board/view?name=${req.body.name}`)
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