/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const subtitlesRouter = require('express').Router()
const Subtitle = require('../models/subtitle')
const fs = require('fs')
const db = require('./db.json')
const youTubeLinkLists_json = require('./youTubeLinkLists.json')
const getLexAfterSearch = require('../functions/getLexAfterSearch')
const getYouTubeLinks = require('../functions/getYouTubeLink')
const { collection } = require('../models/subtitle')
//const shuffle = require('../functions/shuffle')

//This will be used to download the db from mongodb in order to update the db.json
//disable get collection to run this
/*
subtitlesRouter.get('/subtitles', async (req, res) => {
  let main_db_json = { 'subtitles' : [] }
  const subtitles = await Subtitle.find({})
  main_db_json.subtitles = subtitles
  const data = JSON.stringify(main_db_json)
  //console.log(subtitles.length)
  fs.writeFile('subtitles.json', data, (err) => {
    if (err) {
      throw err
    }
    console.log("JSON data is saved.")
  })
  res.json({"number of subtitles downloaded from the mongoDb" : subtitles.length})
})
*/


subtitlesRouter.get('/', async (req, res) => {
  //console.log(req)
  const collections = await db
  res.json(collections)
})

//get one collection
subtitlesRouter.get('/:collection', async (req, res) => {
  let collection_name = req.params.collection
  const collection = await db[collection_name]
  res.json(collection)
})
//

subtitlesRouter.get('/about', async (req, res) => {
  const collections = await db
  res.json(collections)
})

/*
//Just in case if you need only one of the collections
subtitlesRouter.get('/:collection', async(req, res) => {
  const collections_key = await req.params.collection
  console.log(collections_key)
  const collection = await db[collections_key]
  console.log(collection.length)
  const returnThis = {}
  returnThis[collections_key] = collection
  res.json(returnThis)
})
*/

subtitlesRouter.get('/subtitles/results/:query', async(req, res) => {
  const subtitles = await db.subtitles
  //let shuffledSubs = shuffle(subtitles)
  let query = await req.params.query
  let youTubeLinkList = []

  let results = youTubeLinkLists_json.youTubeLinkLists.find(list => list.query === query)

  if(results !== undefined){
    youTubeLinkList = results.youTubeLinkList
    for(let i = 0 ; i < 25 ; i++){
      let updatedLink = youTubeLinkList[i]
      updatedLink.text = subtitles.find(subtitle => subtitle.videoId === youTubeLinkList[i].videoId).text
      youTubeLinkList.splice(i,1,updatedLink)
    }
  } else {
    for(let i = 0 ; i < subtitles.length ; i++){
      let subtitle = subtitles[i]
      if(youTubeLinkList.length < 25){
        let links = getYouTubeLinks(subtitle.text, subtitle.videoId, query, false)
        if(links.length > 0){
          youTubeLinkList = youTubeLinkList.concat(links)
        }
      } else {
        let links = getYouTubeLinks(subtitle.text, subtitle.videoId, query, true)
        if(links.length > 0){
          youTubeLinkList = youTubeLinkList.concat(links)
        }
      }
      if(youTubeLinkList.length > 1000){
        break
      }
    }
  }

  //console.log(youTubeLinkList)

  //youTubeLinkList = buildYouTubeLinkArray(query, videoIDsThatContain, subtitles)
  res.json({
    //'videoIDsThatContain': videoIDsThatContain,
    'youTubeLinkList': youTubeLinkList })
})



//get words results
subtitlesRouter.get('/words/results/:query', async(req, res) => {
  const entries = await db.words
  const wordlist = await db.wordlist
  let query = await req.params.query
  let lexObj = getLexAfterSearch(query, entries, wordlist)
  //console.log(lexObj)
  res.json(lexObj)
})

//post subtitles
subtitlesRouter.post('/subtitles', async(req, res) => {
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
})
//

//
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
//

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

//
subtitlesRouter.get('/subtitles/:videoId', async(req, res) => {
  const subtitle = await Subtitle.findOne({ videoId : req.params.videoId })
  res.json(subtitle.toJSON())
})
//

/* These two cannot be enabled at the same time
subtitlesRouter.get('/:id', async(req, res) => {
  const subtitle = await Subtitle.findById(req.params.id)
  res.json(subtitle.toJSON())
})
*/


module.exports = subtitlesRouter
