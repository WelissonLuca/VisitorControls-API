const Visitors = require('../models/Visitors')
const dictionary = require('../utils/dictionary')

module.exports = {
  async store (req, res) {
    try {
      const { nome, rg, tipo } = req.body
      const visitor = await Visitors.findOne({ where: { rg } })
      if (visitor != undefined) {
        return res
          .status(dictionary.status.BAD_REQUEST)
          .send(dictionary.messages.USUARIO_EXISTS)
      }
      const visitors = await Visitors.create({
        nome,
        rg,
        tipo
      })
      return res.status(dictionary.status.CREATED).json({
        message: dictionary.messages.USER_CREATED,
        visitors
      })
    } catch (err) {
      return res.status(dictionary.status.BAD_REQUEST).send({ error: err })
    }
  },

  async list (req, res) {
    try {
      const todosVisitantes = await Visitors.findAll()
      return res.status(dictionary.status.SUCCESS).send(todosVisitantes)
    } catch (err) {
      return res
        .status(dictionary.status.NOT_FOUND)
        .send({ error: err.messages })
    }
  },

  async search (req, res) {
    try {
      const { rg } = req.params

      const visitor = await Visitors.findOne({
        where: {
          rg
        }
      })

      if (!visitor) {
        return res
          .status(dictionary.status.BAD_REQUEST)
          .send(dictionary.messages.USUARIO_EXISTS)
      }

      return res.status(dictionary.status.SUCCESS).json({
        visitor
      })
    } catch (err) {
      return res
        .status(dictionary.status.BAD_REQUEST)
        .send({ error: err.messages })
    }
  },

  async update (req, res) {
    try {
      const { id } = req.params
      const { nome } = req.body

      const visitorId = await Visitors.findByPk(id)
      if (visitorId == undefined) {
        return res
          .status(dictionary.status.BAD_REQUEST)
          .send(dictionary.messages.USER_NOT_FOUND)
      }

      const updatedVisitor = await Visitors.update({ nome }, { where: { id } })
      return res.status(dictionary.status.SUCCESS).json(updatedVisitor)
    } catch (err) {
      return res
        .status(dictionary.status.BAD_REQUEST)
        .send({ error: err.message })
    }
  }
}
