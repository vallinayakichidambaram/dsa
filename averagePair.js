// multiple pointers pattern
function averagePair(arr, target){
  // add whatever parameters you deem necessary - good luck!

    let left =0;
    let right = arr.length -1;
    let avg;
    while (left < right) {
        avg = (arr[left] + arr[right]) /2;
        console.log(arr[left], arr[right], avg);
        if(avg === target) return true;
        if(avg > target) right--;
        if(avg< target) left ++;
    }
    return false;
}

console.log(averagePair([1,2,3],2.5))
console.log(averagePair([1,3,3,5,6,7,10,12,19],8))// true