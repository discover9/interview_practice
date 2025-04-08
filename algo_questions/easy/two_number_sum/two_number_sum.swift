class Program {
  func twoNumberSum(_ array: inout [Int], _ targetSum: Int) -> [Int] {
    // Write your code here.
    var result: [Int] = []
    for (index, number) in array.enumerated() {
        // start at first number index
        for second_number in array[(index + 1)...] {
            if number + second_number == targetSum {
                result = [number, second_number]
                return result
            }
        }
    }
    return result
  }
}