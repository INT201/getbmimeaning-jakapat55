const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return weight/(height^2)
}
function getBMIMeaning(weight, height) {
  //code here
  let bmi = calculateBMI(weight, height) 
  if(bmi>25.0) return "Overweight"
  if(bmi<18.5) return "Underweight"
  else return "Normal weight"
  

}
console.log(getBMIMeaning(200,2))
module.exports = getBMIMeaning
