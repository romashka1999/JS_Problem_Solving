// Big O time complexity O(n)
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if(currentElement < val) {
            min = middle + 1;
        } else if(currentElement > val) {
            max = middle - 1;
        } else {
            return middle
        }
    }

    return -1;
}


// driver code
console.log(search([1,2,3,4,5,6],4));
console.log(search([1,2,3,4,5,6],6));
console.log(search([1,2,3,4,5,6],11));
