const Visitas = require("../Models/Visitas")

class VisitController {

   async store(req,res){
        const { bloco,apartamento,permitido,visitante_id } =  req.body
        try {
            const createVisit = await Visitas.create({
                bloco:bloco,
                apartamento: apartamento,
                permitido:permitido,
                visitante_id:visitante_id
            })
            console.log(createVisit)
            return res.status(200).json(createVisit)
        } catch (error) {
            throw error 
        }
    }

}

module.exports =  new VisitController