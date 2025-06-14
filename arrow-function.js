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

// Empthy function
const myName = () => console.log("Hello Hossain Ahamed Sorkar")

myName()

// No parameter Function used 
const square = (a) => a * a ;
console.log(square(20))


// Parameter used

const add2 = (num2, num3)=>{
    return num2 * num3;
}
console.log(add2(1,1))


// Regular Function used

document.getElementById("title").addEventListener("click", function (event){
    console.log("Hello Hossain")
})

// Arrow Function used
document.getElementById("title").addEventListener("click",  
    (event)=>{
    console.log("Hello Sorkar")
})