// Big O time complexity O(n)
function maxSubarraySum(arr, n) {
    if(n > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i<n ; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for(let i = n; i<arr.length; i++) {
        let leftIdx = i-n;
        let rightIdx = i;
        tempSum = tempSum - arr[leftIdx] + arr[rightIdx];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


// driver code
console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum([4,2,1,6],1));
