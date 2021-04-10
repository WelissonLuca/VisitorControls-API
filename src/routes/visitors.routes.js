const express = require("express");
const visitorsControllers = require("../controllers/visitorsControllers");

const visitorsRouter = express.Router();

visitorsRouter.get("/visitors", (req, res) => {
	// exemplo de rota
	res.send("Olá ");
});

visitorsRouter.post("/visitors",visitorsControllers.store);

module.exports = visitorsRouter;
