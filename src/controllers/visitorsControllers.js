const Visitors = require("../Models/Visitantes");
const dictionary = require("../utils/dictionary");


module.exports = {
	async store(req, res) {
		try {
			const { nome, rg, tipo } = req.body;
			const visitor = await Visitors.findOne({ where: { rg } });
			if (visitor != undefined)
				return res
					.status(dictionary.status.BAD_REQUEST)
					.send(dictionary.messages.USUARIO_EXISTS);
			const visitors = await Visitors.create({
				nome,
				rg,
				tipo,
			});
			return res.status(dictionary.status.CREATED).json({
				message: dictionary.messages.USER_CREATED,
				visitors,
			});
		} catch (err) {
			return res
				.status(dictionary.status.BAD_REQUEST)
				.send({error: err});
		}
	},
};