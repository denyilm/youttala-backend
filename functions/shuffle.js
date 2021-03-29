//shuffle an Array
function shuffle(arr){
  let copyArr = []
  let pickedNumbers = []
  let length = arr.length
  let i = 0
  
  while(i<length){
    let number = Math.floor(Math.random()*length)
    if(pickedNumbers.indexOf(number)===-1){
      i++
      pickedNumbers.push(number)
      copyArr.push(arr[number])
    }
  }
  return copyArr
}

module.exports = shuffle