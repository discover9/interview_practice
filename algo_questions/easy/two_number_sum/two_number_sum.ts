export function twoNumberSum(array: number[], targetSum: number) {
    // Write your code here.
    let result: number[] = [];
    for (let i: number = 0; i < array.length; i++) {
        for (let k: number = i + 1; k < array.length; k++) {
            if (array[i] + array[k] === targetSum) {
                result = [ array[i], array[k] ]
                return result
            } 
        }
    }
    return result;
  }