process.stdout.write("Enter your name :");
process.stdin.on("data", function (input) {
    console.log("Your name is ", input.toString());
    console.log(input.toString().split(""))
});