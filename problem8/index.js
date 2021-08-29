function twoSums(arr, sum) {
    const sums = [];
    const hashTable = new Map();

    for (const num of arr) {
        const sumMinusElement = sum - num;

        if (hashTable.has(`${sumMinusElement}`)) {
            sums.push([num, sumMinusElement]);
        }
        hashTable.set(`${num}`, num);
    }
    return sums;
}

const ans = twoSums([3, 5, 2, -4, 8, 11], 7);
console.log("ans :>> ", ans);
