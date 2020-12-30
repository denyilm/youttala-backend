const app = require('./app')
//const app_copy = require('./app_copy')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

const PORT = config.PORT || 3002

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
