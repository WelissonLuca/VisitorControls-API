const Visitors = require("../Models/Visitantes");
const dictionary = require("../utils/dictionary");
const validations = require("../utils/validations");

module.exports = {
	async store(req, res) {
		try {
			const { nome, rg, tipo } = req.body;
			validations.userAlreadyExists(rg,res)
			const visitors = await Visitors.create({
				nome,
				rg,
				tipo,
			});
			return res
				.status(dictionary.status.CREATED)
				.send(dictionary.messages.USER_CREATED);
		} catch (err) {
			return res
				.status(dictionary.status.BAD_REQUEST)
				.send({ error: err.messages });
		}
	},
};
