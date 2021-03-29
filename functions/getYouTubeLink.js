/* eslint-disable no-unused-vars */
//when the app knows the video contains the word
//
function convertArrayTimeIntoSeconds(arr){
  return parseInt(arr[0])*3600 + parseInt(arr[1])*60 + parseInt(arr[2])
}
//

//
function findTimeInVideo(lineIndex, wholeText){
  let timeStamp
  let hour = ''
  let minutes = ''
  let seconds = ''
  let index

  for(let i = lineIndex ; i > 0 ; i--){
    if(wholeText[i].includes('-->')){
      timeStamp = wholeText[i]
      hour = wholeText[i].substring(0,2)
      //console.log(hour);
      minutes = wholeText[i].substring(3,5)
      //console.log(minutes);
      seconds = wholeText[i].substring(6,8)
      //console.log(seconds);
      index = i
      break
    }
  }

  return { 'timeStamp': timeStamp, 'time': convertArrayTimeIntoSeconds([hour, minutes, seconds]), 'firstTimeIndex': index }
}
//

function buildLink(videoID, time){
  return `https://www.youtube.com/embed/${videoID}?start=${time}&autoplay=1&cc_load_policy=1&cc_lang_pref=sv`
}

//S-convertArrayTimeIntoMiliSeconds
function convertArrayTimeIntoMiliSeconds(arr){
  return parseInt(convertArrayTimeIntoSeconds(arr.slice(0,3)))*1000 + parseInt(arr[3])
}
//E-convertArrayTimeIntoMiliSeconds

//
function getYouTubeLinks(wholeText, videoId, word, full){
  let puncReg = /[.,"'?!;:]*/
  let startReg = /^/
  let endReg = /$/
  let regex = new RegExp(startReg.source +
        puncReg.source +
        word +
        puncReg.source +
        endReg.source , 'i' )

  let theListForOneSubtitle = []
  //let convertedWholeText = convertWholeText(wholeText)
  let l = wholeText.length


  //without converted
  for(let i = 0; i < l - 1 ; i++){
    let uTubeLink = ''
    let wordArr = wholeText[i].split(' ')

    wordArr.forEach(function(ord){
      if(regex.test(ord)){
        //let time = timeObj.time
        let timeObj = findTimeInVideo(i,wholeText)
        //let timeStamp = timeObj.timeStamp
        if(!full){
          uTubeLink = buildLink(videoId,timeObj.time)
          theListForOneSubtitle.push({
            'youtubeLink': uTubeLink,
            'videoId': videoId,
            'time': timeObj.time,
            'timeStamp': timeObj.timeStamp,
            'text': wholeText
          })
        } else {
          uTubeLink = buildLink(videoId,timeObj.time)
          theListForOneSubtitle.push({
            'youtubeLink': uTubeLink,
            'videoId': videoId,
            'time': timeObj.time,
            //'timeStamp': timeObj.timeStamp,
            //'text': wholeText
          })
        }
      }
    })
  }
  //

  //
  return theListForOneSubtitle
}
//

module.exports = getYouTubeLinks

