import express from 'express';
import nunjucks from 'nunjucks';

import IdeiaController from './controllers/IdeiaController';

const server = express()

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true}))


nunjucks.configure("views", {
  express: server,
  noCache: true
})

server.get('/',IdeiaController.show)
server.get('/ideias', IdeiaController.index)
server.post('/', IdeiaController.store)

server.listen(3333);
