const Visits = require("../models/Visits");
const dictionary = require("../utils/dictionary");
const Visitors = require("../models/Visitors");
const Sequelize = require("sequelize");

class VisitController {
	async store(req, res) {
		const { bloco, apartamento, permitido, rg } = req.body;
		try {
			const visitor = await Visitors.findOne({ where: { rg: rg } });
			if (visitor === null)
				return res
					.status(dictionary.status.BAD_REQUEST)
					.send(dictionary.messages.USER_NOT_FOUND);

			const visit = await Visits.create({
				bloco: bloco,
				apartamento: apartamento,
				permitido: permitido,
				visitante_id: visitor.id,
			});

			return res.status(dictionary.status.CREATED).json({
				message: dictionary.messages.VISIT_CREATED,
				visit,
			});
		} catch (err) {
			return res.status(dictionary.status.BAD_REQUEST).send({ error: err });
		}
	}

	async findVisitsRG(req, res) {
		try {
			const { rg } = req.body;
			const visitor = await Visitors.findOne({ where: { rg } });
			if (visitor == undefined)
				return res
					.status(dictionary.status.BAD_REQUEST)
					.send(dictionary.messages.USER_NOT_FOUND);
			const visits = await Visits.findAll({
				where: { visitante_id: visitor.id },
			});
			return res.json(visits);
		} catch (err) {
			return res
				.status(dictionary.status.BAD_REQUEST)
				.json(dictionary.messages.DEFAULT_ERROR);
		}
	}

	async findVisitsDate(req, res) {
		const { date } = req.body;
		const startDate = new Date(`${date} 00:00:00`);
		const finalDate = new Date(`${date} 23:59:59`);

		const Op = Sequelize.Op;
		const visits = await Visits.findAll({
			where: {
				created_at: {
					[Op.between]: [startDate, finalDate],
				},
			},
		});
		return res.send(visits);
	}
}

module.exports = new VisitController();
