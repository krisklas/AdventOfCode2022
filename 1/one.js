const fs = require("fs");
//read txt and sort into proper array snippets
const elfCalories = fs.readFileSync("test.txt").toString().split("\r\n\r\n");
const fixed = elfCalories.map(item => item.split("\r\n"))


//convert string to number
const caloriesNumber = fixed.map(item => item.map(Number))

//sum up each block of numbers
const sum = caloriesNumber.map(item => item.reduce((current, next) => current + next));

//part 1
//return highest number
//convert array to string for math.max to work
console.log(Math.max(...sum));

//part 2
//sort from highest to lowest
const sort = sum.sort((a, b) => b - a);
//print first 3 values
console.log(sort[0] + sort[1] + sort[2]);