'use strict'

const   Express       = require('express')
,       Server        = require('./configs/server')
,       App           = Express()

App.use(Express.static(__dirname + '/public'))

App.set('views', __dirname + '/views')
App.set('view engine', 'ejs')

App.get('/', (request, response) => {
  response.render('pages/index')
})

App.listen(Server.port, () => {
  console.log(`Server running at localhost on port: ${ Server.port } in ${ Server.mode } mode`)
})