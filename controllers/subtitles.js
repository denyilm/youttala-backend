/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const subtitlesRouter = require('express').Router()
const Subtitle = require('../models/subtitle')
const fs = require('fs')

subtitlesRouter.get('/', async (req, res) => {
  const subtitles = await Subtitle.find({})
  res.json(subtitles.map(subtitle => subtitle.toJSON()))
})

subtitlesRouter.post('/', async(req, res) => {
  //from the local disk
  const channelTitle = req.body.channelTitle
  let folderName = channelTitle.split(' ').join('_')
  const dbName = `${folderName.toLowerCase()}_db.json`
  const path = `C:\\Users\\yilma\\youttala-download-captions\\youttala_channels\\${folderName}\\subtitles\\${dbName}`
  const subtitles_str = fs.readFileSync(path, 'utf-8')
  const subtitles_json = JSON.parse(subtitles_str)
  //from the local disk ends
  const savedSubtitles = await Subtitle.collection.insertMany(subtitles_json.subtitles)
  res.json({ "number of subtitles saved" : savedSubtitles.insertedCount })
  /*

  const newSubtitle = new Subtitle({
    channelTitle: body.channelTitle,
    videoId: body.videoId,
    text: body.text
  })

  const savedSubtitle = await newSubtitle.save()
  res.json(savedSubtitle.toJSON())
  */
})

subtitlesRouter.delete('/', async(req, res) => {
  const channelTitle = req.body.channelTitle
  console.log(channelTitle)
  const deletedSubtitles = await Subtitle.collection.deleteMany({ channelTitle : channelTitle })
  console.log({ "number of deleted subtitles" : deletedSubtitles.deletedCount })
})

module.exports = subtitlesRouter
