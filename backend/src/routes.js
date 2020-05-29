const express = require('express');
const routes = express.Router();

//const sessionController = require('./controllers/sessionController');
//const userController = require('./controllers/userController');
const gruposController = require('./controllers/gruposController');
const lojasController = require('./controllers/lojasController');
const prospectController = require('./controllers/prospectController');

//routes.post('/session', sessionController.create);

//routes.get('/user', userController.index);
//routes.post('/user', userController.create);

routes.get('/grupos', gruposController.index);
routes.post('/grupos', gruposController.create);

routes.get('/lojas/:grupo_nome', lojasController.index);
routes.get('/lojasprospect', lojasController.indexprospect);
routes.get('/lojas', lojasController.index);
routes.post('/lojas', lojasController.create);
routes.put('/lojas/:id', lojasController.update);
routes.delete('/lojas/:id', lojasController.delete);

routes.get('/prospect/:grupo_nome', prospectController.index);
routes.get('/prospect', prospectController.index);
routes.post('/prospect', prospectController.create);
routes.delete('/prospect/:id', prospectController.delete);

module.exports = routes;