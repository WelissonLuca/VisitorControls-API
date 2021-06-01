const express = require('express')
require('dotenv').config()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger_output.json')

const visitorsRouter = require('./routes/visitors.routes') // Rota dos visitantes
const visitRouter = require('./routes/visit.routes') // Rotas das visitas
const app = express()

require('./database')

app.use(express.json())

app.use('/', visitorsRouter)

app.use('/', visitRouter)

app.use(
  '/api-docs',
  (req, res, next) => {
    swaggerDocument.host = req.get('host')
    req.swaggerDoc = swaggerDocument
    next()
  },
  swaggerUi.serve,
  swaggerUi.setup()
)

app.listen(process.env.APP_PORT, () => console.log('server is running'))
