const express = require("express");

const visitRouter = express.Router();

visitRouter.get("/visit", (req, res) => {
	// exemplo de rota
	res.send("Olá ");
});
module.exports = visitRouter;
