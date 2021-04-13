const { Model, DataTypes } = require('sequelize');

class Visitas extends Model {
    static init(sequelize){
        super.init({
            bloco: DataTypes.INTEGER,
            apartamento: DataTypes.INTEGER,
            permitido: DataTypes.BOOLEAN,
            visitante_id:DataTypes.INTEGER
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Visitantes, {foreignKey:'visitante_id', as: 'visitante'})
    }
}

module.exports = Visitas;