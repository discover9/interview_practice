# O(n^2) time | O(1) space
def twoNumberSum(array, targetSum):
    # Write your code here.
    result = []
    for i in range(len(array) - 1):
        for k in  range(i + 1, len(array)):
            if array[i] + array[k] == targetSum:
                result = [array[i], array[k]]

    return result

def twoNumberSumV1(array, targetSum):
    result = []
    test_value = {}
    for i in range(len(array)-1):
        num = targetSum - array[i]
        if test_value.get(num):
            result = [array[i], num]
            return result
        else:
            test_value[num] = True
    
    return result