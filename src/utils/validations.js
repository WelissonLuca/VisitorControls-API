const dictionary = require("./dictionary");
const Visitantes = require('../Models/Visitantes')
module.exports = {
	checkTypeRg(rg,res) {
		if (typeof rg != Number)
			return res.status(dictionary.status.BAD_REQUEST).send(dictionary.messages.ID_NOT_VALID);
	},
	userAlreadyExists(rg, res) {
		Visitantes.findOne(visitantes)
	},
};
