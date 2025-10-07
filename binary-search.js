function binarySearch(sortedArr, value) {
	if(sortedArr.length === 0) return;

	let left =0;
	let right = sortedArr.length -1;
    console.log(left,right)
	while (left < right) {
		let middle = Math.ceil((right + left) / 2);
        console.log("Mid", middle)
		if(sortedArr[middle] === value) return middle;
		if(value > sortedArr[middle]) {
			left = middle;
		}
		if(value < sortedArr[middle]) {
			right = middle;
		}
	}
	return -1;
}

console.log(binarySearch([2,9,10,36,78], 36));