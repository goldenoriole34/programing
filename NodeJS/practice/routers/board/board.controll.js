const list = (req, res)=> {
  res.render('board/list')
}

const view = (req, res)=> {
  res.render('board/view')
}

const write = (req, res)=> {
  res.render('board/write')
}

const update = (req, res)=> {
  res.render('board/update')
}

module.exports = {
  list,
  view,
  write,
  update
}