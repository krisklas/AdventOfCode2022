const fs = require("fs");
//read file and convert it to proper array
let overlaps = fs.readFileSync("test.txt").toString().split("\r\n");
overlaps = overlaps.toString().split("-");
overlaps = overlaps.toString().split(",");
//convert strings in numbers inside array
overlapsAsNum = overlaps.map(Number);


//part 1
const insideOverlap = data => {
    var counter = 0;
    for (let i = 0; i < data.length; i += 4) {
        if ((data[i] >= data[i + 2] && data[i + 1] <= data[i + 3]) || (data[i] <= data[i + 2] && data[i + 1] >= data[i + 3])) {
            counter++;
        }
    }
    console.log(counter);
}

insideOverlap(overlapsAsNum);

//part 2

const overallOverlap = data => {
    var counter = 0;
    for (let i = 0; i < data.length; i += 4) {
        if ((data[i] >= data[i + 2] && data[i + 1] <= data[i + 3]) || (data[i] <= data[i + 2] && data[i + 1] >= data[i + 3])) {
            counter++;
        }
        else if ((data[i + 1] == data[i + 2]) || (data[i] == data[i + 3]) || (data[i + 2] < data[i + 1] && data[i + 1] < data[i + 3]) || (data[i + 2] < data[i] && data[i] < data[i + 3])) {
            counter++;
        }
    }
    console.log(counter);
}

overallOverlap(overlapsAsNum);

//.