// Big O time complexity O(n)
function sumZero(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while(leftPointer < rightPointer) {
        let sum = arr[leftPointer] + arr[rightPointer];
        if(sum === 0) {
            return [arr[leftPointer], arr[rightPointer]];
        } else {
            if(sum > 0) {
                rightPointer--;
            } else {
                leftPointer++;
            }
        }
    }
    return false;
}


// driver code
console.log(sumZero([-3,-2,-1,0,1,2,3]));