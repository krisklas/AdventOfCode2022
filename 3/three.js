const fs = require("fs");
let rucksack = fs.readFileSync("test.txt").toString().split("\r\n");
//part1
const findCommonItem = (rucksack) => {
    const halfIndex = rucksack.length / 2;
    const [firstHalf, secondHalf] = [
        rucksack.slice(0, halfIndex),
        rucksack.slice(halfIndex),
    ];

    const commonItems = [...secondHalf].find((item) => firstHalf.includes(item));

    return commonItems;
};


const getItemPriority = item => {
    if (/[a-z]/.test(item)) {
        return item.charCodeAt() - 96;
    }
    else {
        return item.charCodeAt() - 38;
    }
}

const sum = rucksack
    .map(findCommonItem)
    .map(getItemPriority)
    .reduce((sum, num) => sum + num, 0);

console.log(sum);

//part2

function findCommonItem2(rucksack) {
    const chunkSize = 3;
    var filtered = [];
    for (let i = 0; i < rucksack.length; i += chunkSize) {
        chunk = rucksack.slice(i, i + chunkSize);
        const split1 = chunk[0]
        const split2 = chunk[1]
        const split3 = chunk[2]
        const commonItems = [...split1].find((item) => split2.includes(item) && split3.includes(item));
        filtered.push(commonItems);
    }
    return filtered;
}

const c = function () {
    var b = 0;
    var a = findCommonItem2(rucksack);
    for (let i = 0; i < a.length; i++) {
        b = b + getItemPriority(a[i])

    }
    console.log(b);
}

console.log(c());