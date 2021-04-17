const { Model, DataTypes } = require('sequelize')
const dictionary = require('../utils/dictionary')

class Visitas extends Model {
  static init (sequelize) {
    super.init(
      {
        bloco: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: {
              msg: dictionary.messages.NO_EMPTY_FIELDS
            }
          }
        },
        apartamento: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: {
              msg: dictionary.messages.NO_EMPTY_FIELDS
            }
          }
        },
        permitido: {
          type: DataTypes.BOOLEAN,
          validate: {
            notEmpty: {
              msg: dictionary.messages.NO_EMPTY_FIELDS
            }
          }
        },
        visitante_id: {
          type: DataTypes.INTEGER,
          validate: {
            notEmpty: {
              msg: dictionary.messages.NO_EMPTY_FIELDS
            }
          }
        }
      },
      {
        sequelize
      }
    )
  }

  static associate (models) {
    this.belongsTo(models.Visitantes, {
      foreignKey: 'visitante_id',
      as: 'visitante'
    })
  }
}

module.exports = Visitas
