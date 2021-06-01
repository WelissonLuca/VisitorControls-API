const express = require('express')
const visitController = require('../controllers/VisitController')

const visitRouter = express.Router()

visitRouter.post(
  '/visit',
  /* #swagger.tags = ['Visit'],
    #swagger.parameters['post visit object'] = {	
            in: 'body',
            description: "New visit values",
            schema: {
                "$bloco": 17,
                "$apartamento": 20,
                "$permitido ": true,
                "$visitante_id": 1,
            }
    } */
  visitController.store
)

visitRouter.get(
  '/visit',
  /* #swagger.tags = ['Visit'] */ visitController.findVisitsRG
)

visitRouter.get(
  '/visit/date' /* #swagger.tags = ['Visit'] */,
  visitController.findVisitsDate
)

module.exports = visitRouter
