/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')

const subtitleSchema = new mongoose.Schema({
  channelTitle: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
    unique: true
  },
  buggyLines: {
    type: Array
  },
  text: {
    type: Array
  }
})

subtitleSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Subtitle', subtitleSchema)
