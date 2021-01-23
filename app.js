/* eslint-disable no-unused-vars */
const config = require('./utils/config')
const express = require('express')
//requires downloading the package
require('express-async-errors')
const app = express()
const cors = require('cors')
const subtitlesRouter = require('./controllers/subtitles')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
//
let path = require('path')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to the MongoDB:', config.DB_NAME)
  })
  .catch((error) => {
    logger.error(`error connection to the database: ${config.DB_NAME}`, error.message)
  })


app.use(cors())
app.use(express.static('build'))



app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/subtitles', subtitlesRouter)

app.use(middleware.unknownEndPoint)
app.use(middleware.errorHandler)

//added /about
app.get('*', (req, res) => {
  console.log('Does he send something to thi?')
  res.sendFile(path.join(__dirname, '/build/index.html'))
})
//

module.exports = app
