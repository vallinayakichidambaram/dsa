// frequency counter pattern
function findPair(arr, target) {
    let newArr = [];
    for(let key1 in arr) {
        newArr[key1] = arr[key1] - target;
    }
    console.log(newArr);
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let key2 of arr) {
        frequencyCounter1[key2] = (frequencyCounter1[key2] || 0) + 1;
    }
    console.log(frequencyCounter1)
     for(let key3 of newArr) {
        frequencyCounter2[key3] = (frequencyCounter2[key3] || 0) + 1;
    }
    console.log(frequencyCounter2)

    for(let key4 in frequencyCounter1) {
        if(target === 0 && frequencyCounter2[key4] > 1) return true;
        if(target > 0 && frequencyCounter2[key4] > 0) return true;
    }
    return false;
}

console.log(findPair([3,9,5,7], 0));