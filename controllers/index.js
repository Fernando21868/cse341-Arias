const { ObjectId } = require("mongodb");
const mongodb = require("../db/connect");
const { response } = require("express");

const fernandoRoute = (req, res, next) => {
  res.send("Fernando Arias");
};

const claudiaRoute = (req, res, next) => {
  res.send("Claudia Arias");
};

const orlandoRoute = (req, res, next) => {
  res.send("Orlando Arias");
};

const contactsRoute = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const singleContactRoute = async (req, res, next) => {
  const { id } = req.params;
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .findOne({ _id: new ObjectId(id) });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(result);
};

const createContactsRoute = async (req, res, next) => {
  const newContact = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .insertOne(req.body)
    .then((newContact) => {
      res.status(201).json(newContact);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const updateContactsRoute = async (req, res, next) => {
  const contactUpdated = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { upsert: true }
    )
    .then((updatedContact) => {
      res.status(204).json(updatedContact);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const deleteContactsRoute = async (req, res, next) => {
  const contactUpdated = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then((deletedContact) => {
      res.status(200).json(deletedContact);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = {
  fernandoRoute,
  claudiaRoute,
  orlandoRoute,
  contactsRoute,
  singleContactRoute,
  createContactsRoute,
  updateContactsRoute,
  deleteContactsRoute,
};
