const Visitas = require("../Models/Visitas")
const dictionary = require("../utils/dictionary");
const Visitors = require("../Models/Visitantes");

class VisitController {

   async store(req,res){
        const { bloco,apartamento,permitido,visitante_id } =  req.body
        try {
            const visit = await Visitas.create({
                bloco:bloco,
                apartamento: apartamento,
                permitido:permitido,
                visitante_id:visitante_id
            })
            
            return res.status(dictionary.status.CREATED).json({
                message: dictionary.messages.USER_CREATED,
				visit
            })

        } catch (err) {
            return res
            .status(dictionary.status.BAD_REQUEST)
            .send({ error: err})
        }
    }
    
    async findVisitsRG(req,res){
        const {rg} = req.body
        const visitor = await Visitors.findOne({ where: { rg:rg } })
        const visits = await Visitas.findAll({where: { visitante_id: visitor.id}})
        return res.send(visits)

    }
}

module.exports =  new VisitController