const Visitas = require("../Models/Visitas")
const dictionary = require("../utils/dictionary");

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
    
}

module.exports =  new VisitController