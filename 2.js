//2. Accept two inputs from the user and output their sum.
const prompt = require('prompt-sync')();
// let num1 =parseInt(prompt("Enter a number: "));
// let num2 =parseFloat(prompt("Enter another number: "));
// let sum =parseFloat(Sum(num1,num2));
// console.log("Sum: "+sum);
 
// function Sum(num1,num2){
//     let sum=num1+num2;
//     return sum;
// }


let num1 = parseInt(prompt("Enter a number: "))
let num2 = parseInt(prompt("Enter another number: "))

let sum = parseFloat((num1,num2) =>{
    let sum = num1 + num2
    return sum
})

console.log(sum)