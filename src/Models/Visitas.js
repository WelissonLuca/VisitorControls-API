const { Model, DataTypes } = require('sequelize');

class Visitas extends Model {
    static init(sequelize){
        super.init({
            bloco: DataTypes.INTENGER,
            apartamento: DataTypes.STRING,
            permitido: DataTypes.BOOLEAN,
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Visitantes, {foreignKey:'visitante_id', as: 'visitante'})
    }
}

module.exports = Visitas;