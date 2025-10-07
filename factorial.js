function factorial (num) {
    if(num === 1 || num === 0) return 1;
    let result = num * factorial(num -1);
    return result;
}

console.log(factorial(0))