function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of array1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of array2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false;
        }
    }

    return true;

}

const input1 = process.argv[2].replace(/^\[(.+)\]$/, '$1').split(",").map(Number);
console.log(input1);