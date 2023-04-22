const routes = require('express').Router();
const { fernandoRoute, claudiaRoute, orlandoRoute } = require('../controllers');

routes.get('/', fernandoRoute);
routes.get('/claudia', claudiaRoute);
routes.get('/orlando', orlandoRoute);

module.exports = routes;
