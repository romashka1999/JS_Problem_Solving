// Big O time complexity O(n)
function mergeTwoSortedArrays(arr1, arr2) {
    let pointer1 = 0;
    let pointer2 = 0;
    let currentPointer = 0;

    let newArr = [];

    // n operation
    while(currentPointer < (arr1.length + arr2.length)) {

        let isArr1Depleted = pointer1 >= arr1.length;
        let isArr2Depleted = pointer2 >= arr2.length;

        if(!isArr1Depleted && (isArr2Depleted || (arr1[pointer1] < arr2[pointer2]))) {
            newArr[currentPointer] = arr1[pointer1];
            pointer1++;
        } else {
            newArr[currentPointer] = arr2[pointer2];
            pointer2++;
        }
        currentPointer++;
    }

    return newArr;
}

//driver code
console.log(mergeTwoSortedArrays([-1,3,55,99,101], [2,2,44,63,88,322,12345,53467]));

