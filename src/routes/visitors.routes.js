const express = require("express");
const visitorsControllers = require("../controllers/visitorsControllers");

const visitorsRouter = express.Router();


visitorsRouter.post("/visitors",visitorsControllers.store);

module.exports = visitorsRouter;
