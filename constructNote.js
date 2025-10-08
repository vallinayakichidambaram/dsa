function constructNote(message, letters){
  // add whatever parameters you deem necessary - good luck!

  let lettersCounter = {};
  let messageCounter = {};

  for(let key1 of letters) {
    lettersCounter[key1] = (lettersCounter[key1] || 0) + 1;
  };

  for(let key2 of message) {
    messageCounter[key2] = (messageCounter[key2] || 0) + 1;
  }

  console.log(lettersCounter);
  console.log(messageCounter);

  for(let val in messageCounter) {
    if(!lettersCounter[val]) return false;
    if(lettersCounter[val] < messageCounter[val]) return false;
  }

  return true;
}

console.log(constructNote('abc', 'aabbff'));