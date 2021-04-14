const Visitors = require('../Models/Visitantes');
const dictionary = require('../utils/dictionary');
module.exports = {
    async store(req,res){
        try {
            const { nome, rg, tipo } = req.body;

						const visitors = await Visitors.create({
							nome,
							rg,
							tipo,
						});
						return res.status(dictionary.status.CREATED).json(visitors); 
        } catch (err) {
            return res.status(dictionary.status.BAD_REQUEST).send({ error: err.messages });
       }
    }
}