const Visitors = require('../Models/Visitantes');

module.exports = {
    async store(req,res){
        const {nome, rg, tipo} = req.body;
        console.log(req.body)
        try{
            const visitors = await Visitors.create(
                {
                    nome:nome,
                    rg:rg,
                    tipo:tipo
                }
            );
        } catch(error){
            throw error
        }
        
        console.log(visitors)
        return res.status(200).json(visitors);  
    }
}