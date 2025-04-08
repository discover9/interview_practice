def twoNumberSum(array, targetSum):
    # Write your code here.
    result = []
    for number in array:
        for second_number in array:
            if second_number + number == targetSum:
                result = [number, second_number]

    return result

