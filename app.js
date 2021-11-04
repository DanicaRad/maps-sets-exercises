//****************
// hasDuplicate
//****************
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => arr.length !== [... new Set(arr)].length


//****************
// vowelCount
//****************
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    const vowelMap = new Map();
    for(let char of str) {
        let lowerCase = char.toLowerCase();
        if('aeiou'.includes(lowerCase)) {
            if(vowelMap.has(lowerCase)) {
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1) 
            } else {
                vowelMap.set(lowerCase, 1)
            }
        }
    }
    return vowelMap;
}