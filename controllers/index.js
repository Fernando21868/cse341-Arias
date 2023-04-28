const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const fernandoRoute = (req, res, next) => {
  res.send('Fernando Arias');
};

const claudiaRoute = (req, res, next) => {
  res.send('Claudia Arias');
};

const orlandoRoute = (req, res, next) => {
  res.send('Orlando Arias');
};

const contactsRoute = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const singleContactRoute = async (req, res, next) => {
  const { id } = req.params;
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .findOne({ _id: new ObjectId(id) });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(result);
};

module.exports = {
  fernandoRoute,
  claudiaRoute,
  orlandoRoute,
  contactsRoute,
  singleContactRoute,
};
