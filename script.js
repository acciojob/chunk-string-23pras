function stringChop(str, n) {
    if (str === null) return [];
    let arr = [];
    n = parseInt(n, 10); // Convert chunk size to an integer

    for (let i = 0; i < str.length; i += n) {
        let val = str.substring(i, i + n);
        arr.push(val);
    }

    return arr;
}

// Do not change the code below

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));