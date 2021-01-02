/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const subtitlesRouter = require('express').Router()
const Subtitle = require('../models/subtitle')
const db = require('./db.json')
const fs = require('fs')

/*
subtitlesRouter.get('/', async (req, res) => {
  const subtitles = await Subtitle.find({})
  res.json(subtitles.map(subtitle => subtitle.toJSON()))
})
*/



/*
//old fetch all. Causes a lot of loading time
subtitlesRouter.get('/', async (req, res) => {
  //console.log(req)
  console.log(req.headers.host)
  const subtitles = await Subtitle.find({})
  console.log(subtitles.length)
  res.json(subtitles.map(subtitle => subtitle.toJSON()))
})
*/

/*
//This will be used to download the db from mongodb in order to update the db
subtitlesRouter.get('/', async (req, res) => {
  let main_db_json = { 'subtitles' : [] }
  const subtitles = await Subtitle.find({})
  main_db_json.subtitles = subtitles
  const data = JSON.stringify(main_db_json)
  console.log(subtitles.length)
  fs.writeFile('db.json', data, (err) => {
    if (err) {
      throw err
    }
    console.log("JSON data is saved.")
  })
  //res.json(subtitles.map(subtitle => subtitle.toJSON()))
})
*/


//This will be used for the app
subtitlesRouter.get('/', async (req, res) => {
  //console.log(req)
  const subtitles = await db.subtitles
  res.json(subtitles.map(subtitle => subtitle))
})

/*
//Insert the whole db
subtitlesRouter.post('/', async (req, res) => {
  const subtitles = db.subtitles
  const subtitles_withoutId = subtitles.map(subtitle => subtitle = {
    "channelTitle" : subtitle.channelTitle,
    "videoId" : subtitle.videoId,
    "buggyLines" : subtitle.buggyLines,
    "text": subtitle.text
  })
  const savedSubtitles = await Subtitle.collection.insertMany(subtitles_withoutId)
  res.json({ "number of subtitles saved" : savedSubtitles.insertedCount })
})
*/


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


/*
//These two get routes cannot be enabled at the same time
subtitlesRouter.get('/:id', async(req, res) => {
  const subtitle = await Subtitle.findById(req.params.id)
  res.json(subtitle.toJSON())
})
*/



module.exports = subtitlesRouter
