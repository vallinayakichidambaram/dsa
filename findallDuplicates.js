//frequency counter
function findAllDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
  let frequecyCounter = {}
    for(let key of arr) {
        frequecyCounter[key] = (frequecyCounter[key] || 0) + 1;
    }
    console.log(frequecyCounter)
    let result=[];

    for(let val in frequecyCounter) {
        if(frequecyCounter[val] > 1) result.push(Number(val));
    }
    return result;
}

console.log(findAllDuplicates([4,8,2,5,9,4]))