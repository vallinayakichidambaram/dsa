function sameFrequency(num1, num2){
    
  // good luck. Add any arguments you deem necessary.
  if(num1.toString().length !== num2.toString().length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (key of num1.toString()) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }
  console.log(frequencyCounter1);

  for (key of num2.toString()) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }
  console.log(frequencyCounter2);

  for(let val in frequencyCounter1) {
    if(!frequencyCounter2[val]) return false;
    if(frequencyCounter1[val] !== frequencyCounter2[val]) return false;
  }

  return true;

}

console.log(sameFrequency(134,112))
