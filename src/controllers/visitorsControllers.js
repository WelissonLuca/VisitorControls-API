const Visitors = require('../Models/Visitantes');

module.exports = {
    async store(req,res){
        const {nome, rg, tipo} = req.body;
            const visitors = await Visitors.create(
                {
                    nome:nome,
                    rg:rg,
                    tipo:tipo
                }
            );        
        return res.status(200).json(visitors);  
    }
}