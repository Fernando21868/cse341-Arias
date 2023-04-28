const routes = require('express').Router();
const {
  fernandoRoute,
  claudiaRoute,
  orlandoRoute,
  contactsRoute,
  singleContactRoute,
} = require('../controllers');

routes.get('/', fernandoRoute);
routes.get('/claudia', claudiaRoute);
routes.get('/orlando', orlandoRoute);
routes.get('/contacts', contactsRoute);
routes.get('/contacts/:id', singleContactRoute);

module.exports = routes;
