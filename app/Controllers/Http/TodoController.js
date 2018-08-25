'use strict'

class TodoController {
  profile ({ view }) {
    return view.render('user.index', {
      username: 'Jesus'
    })
  }
}

module.exports = TodoController
