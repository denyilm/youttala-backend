/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const subtitlesRouter = require('express').Router()
const Subtitle = require('../models/subtitle')
const fs = require('fs')

/*
subtitlesRouter.get('/', async (req, res) => {
  const subtitles = await Subtitle.find({})
  res.json(subtitles.map(subtitle => subtitle.toJSON()))
})
*/

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

  if(req.body.channelTitle){
    const channelTitle = req.body.channelTitle
    console.log(channelTitle)
    const deletedSubtitles = await Subtitle.collection.deleteMany({ channelTitle : channelTitle })
    console.log({ "number of deleted subtitles" : deletedSubtitles.deletedCount })
  }else if(req.body.videoId){
    const videoId = req.body.videoId
    console.log(videoId)
    const deletedSubtitle = await Subtitle.collection.deleteOne({ videoId : videoId })
    console.log({ "number of deleted subtitles" : deletedSubtitle.deletedCount })
  } else {
    const deletedSubtitles = await Subtitle.collection.deleteMany({})
    console.log({ "number of deleted subtitles" : deletedSubtitles.deletedCount })
  }

})

/*
subtitlesRouter.put('/:id', async(req, res) => {
  const body = req.body

  const subtitle = {
    buggyLines : body.buggyLines
  }

  const updatedSubtitle = await Subtitle.findByIdAndUpdate(req.params.id, subtitle, { new: true })
  res.json(updatedSubtitle.toJSON().id)
})
*/

//OBS! DISABLE THIS when removing the buggy lines
subtitlesRouter.put('/:videoId', async(req, res) => {
  const body = req.body

  const subtitle = {
    buggyLines : body.buggyLines
  }

  const updatedSubtitle = await Subtitle.findOneAndUpdate({ videoId : req.params.videoId }, subtitle, { new: true })
  res.json(updatedSubtitle.toJSON())
})


//OBS! ENABLE ONLY for Admin for correcting the buggy lines
/*
subtitlesRouter.put('/:id', async(req, res) => {
  const body = req.body

  const subtitle = {
    id: body.id,
    buggyLines : body.buggyLines,
    text: body.text
  }

  const updatedSubtitle = await Subtitle.findByIdAndUpdate(req.params.id, subtitle, { new: true })
  res.json(updatedSubtitle.toJSON())
})
*/


subtitlesRouter.get('/:videoId', async(req, res) => {
  const subtitle = await Subtitle.findOne({ videoId : req.params.videoId })
  res.json(subtitle.toJSON())
})

/* These two cannot be enabled at the same time
subtitlesRouter.get('/:id', async(req, res) => {
  const subtitle = await Subtitle.findById(req.params.id)
  res.json(subtitle.toJSON())
})
*/


module.exports = subtitlesRouter
