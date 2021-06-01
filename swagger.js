const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = [
  './src/routes/visit.routes.js',
  './src/routes/visitors.routes.js',
]

swaggerAutogen(outputFile, endpointsFiles)
