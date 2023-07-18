const config = require('./utils/config')
const app = require('./app')
const http = require('http')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.log(`Server running on port ${config.PORT}`)
})
