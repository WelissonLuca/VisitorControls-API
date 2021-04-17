const express = require("express");
const visitorsControllers = require("../controllers/VisitorsControllers");
const visitorsRouter = express.Router();

visitorsRouter.post("/visitors", visitorsControllers.store);

visitorsRouter.get("/visitors", visitorsControllers.list);
visitorsRouter.put("/visitors/:id", visitorsControllers.update);

module.exports = visitorsRouter;
