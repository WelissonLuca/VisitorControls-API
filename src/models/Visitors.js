const { Model, DataTypes } = require('sequelize')
const dictionary = require('../utils/dictionary')
class Visitantes extends Model {
  static init (sequelize) {
    super.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: dictionary.messages.NO_EMPTY_FIELDS
            },
            len: {
              args: [3, 30],
              msg: dictionary.messages.NAME_NOT_VALID
            }
          }
        },
        rg: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: dictionary.messages.NO_EMPTY_FIELDS
            },
            len: {
              args: [7, 8],
              msg: dictionary.messages.ID_NOT_VALID
            }
          }
        },
        tipo: {
          type: DataTypes.ENUM('visitante', 'prestador'),
          allowNull: false,
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
}

module.exports = Visitantes
