// Big O time complexity O(n)
function same(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // n operation
    for(let elem of arr1) {
        frequencyCounter1.hasOwnProperty(elem) ? frequencyCounter1[elem]++ : frequencyCounter1[elem] = 0; // 1 operation
    }
    // n operation
    for(let elem of arr2) {
        frequencyCounter2.hasOwnProperty(elem) ? frequencyCounter2[elem]++ : frequencyCounter2[elem] = 0; // 1 operation
    }

    // n operaion
    for(key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) { // 1 operation
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) { // 1 operation
            return false;
        }
    }

    return true;
}

//driver code
console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,1], [4,4,1]));
console.log(same([1,2,1], [4,4,1]));
