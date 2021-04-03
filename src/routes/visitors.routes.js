const express = require("express");

const visitorsRouter = express.Router();

visitorsRouter.get("/visitors", (req, res) => {
	// exemplo de rota
	res.send("Olá ");
});
module.exports = visitorsRouter;
