const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//LOGIN
routes.post('/sessions', SessionController.create);

//NEW AND LIST ONGS
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//GET INCIDENTS SPECIFIC
routes.get('/profile', ProfileController.index);


//INCIDENTS NEW,LIST,DELETE 
routes.get('/incidents', IncidentController.index); 
routes.post('/incidents', IncidentController.create); 
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

