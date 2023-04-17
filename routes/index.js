const routes = require('express').Router();
const { home } = require('../controllers');

routes.get('/', home);

module.exports = routes;
