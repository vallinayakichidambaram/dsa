function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.
    let left=0;
    for(let key in str2) {
        if(str1[left] === str2[key]) {
            console.log(`found ${left} key in str2[${key}]`);
            left++;
        };
    }
    if(left === str1.length) return true;
    return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
