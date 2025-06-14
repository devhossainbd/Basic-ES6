// Arrow function

// Single line Arrow function
const add = (num1, num2)=>num1+num2;

// console.log(add(20,10))

// Normal Function

function sum (sum1, sum2){
    return sum1 +sum2;
}
const result = sum(20, 20);
// console.log(result);

// Variable Function
const sum2 = function (num1, num2){
    return num1+ num2;
}
// console.log(sum2(50,50));



// Multi line arrow function 
const sum3 = (num1=1, num2=1)=>{
    return num1 * num2;
    }
    // console.log(sum3(50))