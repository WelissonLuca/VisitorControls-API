const { Model, DataTypes } = require('sequelize');

class Visitantes extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            rg: DataTypes.STRING,
            tipo: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Visitantes;