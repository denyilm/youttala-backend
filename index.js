const app = require('./app')
const http = require('http')
const enforce = require('express-sslify')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.use(enforce.HTTPS({ trustProtoHeader: true }))

const server = http.createServer(app)

const PORT = config.PORT || 3003

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
