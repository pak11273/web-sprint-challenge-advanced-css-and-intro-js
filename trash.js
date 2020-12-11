function randomize(arr){
  let used = [];
  let randomArr = [];
  for(let i = 0; used.length !== arr.length; i++) {
    let randomIndex = Math.floor(Math.random()* arr.length)
    console.log(randomIndex)
    if(!used.includes(randomIndex)) {
        console.log(used)
        used.push(randomIndex)
        console.log(used)
        randomArr.push(arr[randomIndex]);
    }
  }
  return randomArr;
}

console.log(randomize([2,3,4]));