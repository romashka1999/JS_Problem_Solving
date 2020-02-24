// Big O time complexity O(n)
function countUniqueValues(arr) {
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}


// driver code
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([-2,3,3,4,55,5555,1233,1233]));
