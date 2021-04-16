const express = require("express");
const visitController = require("../controllers/VisitController");

const visitRouter = express.Router();


visitRouter.get("/visit", (req, res) => {
	// exemplo de rota
	res.send("Olá ");
});

visitRouter.post("/visit",visitController.store)

module.exports = visitRouter;
