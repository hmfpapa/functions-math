const add = (num1, num2) => {
    const sum = num1 + num2
    return sum
}
const multiply = (num3) => {
    const double = num3 * 2
    return double
}
const addition = add(4, 6)
console.log(addition)

const doubled = multiply(addition)
console.log(doubled)