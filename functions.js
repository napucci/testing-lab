function returnTwo() {
  return 2; 
}

const greeting = name => `Hello, ${name}`
const add = (num1, num2) => num1 + num2; 
const multiply = (num1, num2) => num1 * num2; 


module.exports = {
  returnTwo, 
  greeting, 
  add, 
  multiply
}