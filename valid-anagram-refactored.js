function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let lookup ={};
    for (let val of str1) {
        // let letter = str1[val];
        // console.log(letter);
        lookup[val] ? lookup[val]++ : lookup[val] = 1;
    }
    console.log(lookup);
  
    for (let val of str2) {
        if(!lookup[val]) {
            return false;
        }

        lookup[val] -= 1;
        console.log(lookup)
    }
    console.log(lookup)
    return true;
}

console.log(validAnagram('aaz','zaa'));