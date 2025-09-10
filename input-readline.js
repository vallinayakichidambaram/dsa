import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (input){
    console.log("Your number is ",input);
    // rl.close();
    rl.question("Enter the second number: ", function(num2) {
    console.log("Second number is ", num2);
    rl.close()
})
})