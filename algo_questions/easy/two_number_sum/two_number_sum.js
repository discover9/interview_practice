//  O(n^2) time | 0(1) space
function twoNumberSum(array, targetSum) {
    // Write your code here.
    let result = []
    for(let i = 0; i < array.length; i++) {
        for(let k = i+1; k < array.length; k++) {
            if (array[i] + array[k] === targetSum) 
            result = [array[i], array[k]] 
        }
    }
    return result
}

function twoNumberSumV1(array, targetSum) {
    let numbers = { }
    for(let i = 0; i < array.length; i++) {
        let potentialMatch = targetSum - array[i]
        if ( numbers?.[potentialMatch] ){
            return [potentialMatch, array[i]]
        } else {
            numbers[array[i]] = true
        }
    }
    return []

}

function twoNumberSumV2() {
    
}

exports.twoNumberSum = twoNumberSum;
exports.twoNumberSumV1 = twoNumberSumV1;