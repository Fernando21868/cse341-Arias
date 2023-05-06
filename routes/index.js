const routes = require("express").Router();
const {
  fernandoRoute,
  claudiaRoute,
  orlandoRoute,
  contactsRoute,
  singleContactRoute,
  createContactsRoute,
  updateContactsRoute,
  deleteContactsRoute
} = require("../controllers");

routes.get("/", fernandoRoute);
routes.get("/claudia", claudiaRoute);
routes.get("/orlando", orlandoRoute);
routes.get("/contacts", contactsRoute);
routes.get("/contacts/:id", singleContactRoute);
routes.post("/contacts", createContactsRoute);
routes.put("/contacts/:id", updateContactsRoute);
routes.delete("/contacts/:id", deleteContactsRoute);

module.exports = routes;
