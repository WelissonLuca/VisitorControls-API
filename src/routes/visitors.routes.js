const express = require("express");
const visitorsControllers = require("../controllers/visitorsControllers");
const visitorsRouter = express.Router();

visitorsRouter.post("/visitors",visitorsControllers.store);

visitorsRouter.get("/visitors", visitorsControllers.list);

module.exports = visitorsRouter;
