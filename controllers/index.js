const { ObjectId } = require("mongodb");
const mongodb = require("../db/connect");

const contactsRoute = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db().collection("contacts").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const singleContactRoute = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .findOne({ _id: new ObjectId(id) });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createContactsRoute = async (req, res, next) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .insertOne({ firstName, lastName, email, favoriteColor, birthday })
      .then((newContact) => {
        res.status(201).json(newContact);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateContactsRoute = async (req, res, next) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .findOneAndUpdate(
        { _id: new ObjectId(req.params.id) },
        { $set: { firstName, lastName, email, favoriteColor, birthday } },
        { upsert: true }
      )
      .then((updatedContact) => {
        res.status(204).json(updatedContact);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteContactsRoute = async (req, res, next) => {
  try {
    await mongodb
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
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  contactsRoute,
  singleContactRoute,
  createContactsRoute,
  updateContactsRoute,
  deleteContactsRoute
};
