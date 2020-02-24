// Big O time complexity O(n)
function validAnagram(str1, str2) {

    // 1 operation
    if(str1.length !== str2.length) {
        return false;
    }

    let lookup = {};

    // n operation
    for(char of str1) {
        lookup.hasOwnProperty(char) ? lookup[char]++ : lookup[char] = 1; // 1 operation
    }

    // n operation
    for(char of str2) {
        if(!lookup[char]) { // 1 operation
            return false;
        } else {
            lookup[char]--; // 1 operation
        }    
    }

    return true;
}

//driver code
console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));