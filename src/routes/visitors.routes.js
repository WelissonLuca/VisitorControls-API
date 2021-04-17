const express = require("express");
const visitorsControllers = require("../controllers/visitorsControllers");
const visitorsRouter = express.Router();

visitorsRouter.post("/visitors",visitorsControllers.store);

visitorsRouter.get("/visitors", visitorsControllers.list);
visitorsRouter.get("/visitor", visitorsControllers.search);
visitorsRouter.put("/visitors/:id", visitorsControllers.update);
visitorsRouter.get("/visitors/:rg", visitorsControllers.search);



module.exports = visitorsRouter;
