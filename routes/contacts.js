const routes = require("express").Router();

const {
  contactsRoute,
  singleContactRoute,
  createContactsRoute,
  updateContactsRoute,
  deleteContactsRoute
} = require("../controllers");

routes.get("/", contactsRoute);
routes.get("/:id", singleContactRoute);
routes.post("/", createContactsRoute);
routes.put("/:id", updateContactsRoute);
routes.delete("/:id", deleteContactsRoute);

module.exports = routes;
