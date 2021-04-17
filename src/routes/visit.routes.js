const express = require("express");
const visitController = require("../controllers/VisitController");

const visitRouter = express.Router();

visitRouter.post("/visit",visitController.store)

visitRouter.get("/visit",visitController.findVisitsRG);

module.exports = visitRouter;
