const dictionary = require("./dictionary");
const Visitors = require("../Models/Visitantes");
module.exports = {
	async userAlreadyExists(rg, res) {
		const visitor = await Visitors.findOne({ where: { rg } });
		if (visitor != undefined)
			return res
				.status(dictionary.status.BAD_REQUEST)
				.send(dictionary.messages.USUARIO_EXISTS);
	},
};
