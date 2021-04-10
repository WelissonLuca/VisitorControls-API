Visitors = require('../Models/Visitantes');

module.exports = {
    async store(req,res){
        const {nome, rg, tipo} = req.body;
        console.log(req.body)
        const visitors = await Visitors.create(
            {
                nome,
                rg,
                tipo
            }
        );
        console.log(visitors)
        return res.status(200).json(visitors);  
    }
}