const express = require('express')
const visitorsControllers = require('../controllers/VisitorsControllers')
const visitorsRouter = express.Router()

visitorsRouter.post(
  '/visitors' /* #swagger.tags = ['Visitor'],
    #swagger.parameters['post visit object'] = {	
            in: 'body',
            description: "New visit values",
            schema: {
                "$nome": "marcelo",
                "$rg": "848484",
                "$tipo ": "visitante",
            }
    } */,
  visitorsControllers.store
)

visitorsRouter.get(
  '/visitors' /* #swagger.tags = ['Visitor'], */,
  visitorsControllers.list
)
visitorsRouter.get(
  '/visitor',
  /* #swagger.tags = ['Visitor'], */ visitorsControllers.search
)
visitorsRouter.put(
  '/visitors/:id',
  /* #swagger.tags = ['Visitor'],
    #swagger.parameters['post visit object'] = {	
            in: 'body',
            description: "Update visit values",
            schema: {
                "$nome": "Update marcelo",
                "$rg": "848484",
                "$tipo ": "visitante",
            }
    } */ visitorsControllers.update
)
visitorsRouter.get(
  '/visitors/:rg',
  /* #swagger.tags = ['Visitor'], */ visitorsControllers.search
)

module.exports = visitorsRouter
