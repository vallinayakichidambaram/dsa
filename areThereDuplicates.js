// frequencycounter pattern
function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let frequecyCounter = {};

  for (let key of args) {
    frequecyCounter[key] = (frequecyCounter[key] || 0) + 1;
  }

  console.log(frequecyCounter);

  for(let val in frequecyCounter) {
    if(frequecyCounter[val] > 1) return true;
  }
  return false;

}

console.log(areThereDuplicates('g','o','p','g','i'))