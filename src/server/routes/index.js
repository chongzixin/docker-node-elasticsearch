const express = require("express");
const controller = require("../controllers");
const routes = express.Router();

routes.get("/", controller.getQuotes);
routes.post("/new", controller.addQuote);

// same way of doing the above
// routes.route("/").get(controller.getQuotes);
// routes.route("/new").post(controller.addQuote);

module.exports = routes;