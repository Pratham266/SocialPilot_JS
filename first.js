//1.let var,const
var a = 10;
{
   var a = 20;
}
console.log("a : ",a);         //var is block-scoped

let b=10;
{
   let  b=20;
}
console.log("b : ",b);         //let is block scoped

const c = 10;                  //it's block-scoped
   // c = 20;                  // Error: Assignment to a constant variable
console.log("c : ",c)


//2.Operators

//=>Arithmetic
let d = 2;
let e = 3;

console.log(d+e);
console.log(d-e)
console.log(d*e)
console.log(d/e)
console.log(d**e)
console.log(d%e)

//=>Comparision
let x = 5;
let y = 10;

console.log(x == y); 
console.log(x != y); 
console.log(x > y);  
console.log(x < y);  
console.log(x >= y); 
console.log(x <= y); 

//=>logical operators
let p = true;
let q = false;

console.log(p && q); 
console.log(p || q); 
console.log(!p);     

//assignment operator
let r = 4;
r +=2
console.log("r: ",r)

//=>increment and decrement
let counter = 6;
counter++
console.log("inc cnt : ",counter)
counter--
console.log("dec cnt : ",counter--)

//=>Unary
let num = 10;

console.log(-num);  
console.log(++num); 
console.log(num--); 

//if...else statemetn
let t = 10;

if (t > 10) {
    console.log("t is greater than 10");
} else if (t < 10) {
    console.log("t is less than 10");
} else {
    console.log("t is equal to 10");
}

//Switch statemt
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Tuesday":
    case "Wednesday":
        console.log("It's the middle of the week");
        break;
    case "Thursday":
        console.log("The weekend is almost here");
        break;
    case "Friday":
        console.log("It's Friday, time to celebrate!");
        break;
    default:
        console.log("It's the weekend!");
}


//Loops
//=>for loop
for (let i = 0; i < 5; i++) {
    console.log("for loop : ",i);
}

//for...in loop
let arr1 = [11,12,13,14,15]
for (let i in arr1){
    console.log("in for in loop i > ",i,"arr value > ",arr1[i]);
}

//for...of loop
for(let i of arr1){
    console.log(" In for of loop : ",i);
}

//for...each loop
arr1.forEach((num)=>{console.log("in for each : ",num)})

//while loop
let u=0;
while(u<5){
    console.log("In while loop : ",u)
    u++
}

//do...while loop
let v=0;
do{
    console.log("in do while loop : ",v)
    v++;
}while(v<5);

//Functions in javascript

function hello(name){
    console.log(`Hello ${name}`);
}

hello("pratham")

// Named Function Expression
let multiply = function multiply(a, b) {
    return a * b;
};

// Anonymous Function Expression
let add = function(a, b) {
    return a + b;
};

console.log(multiply(2, 3)); 
console.log(add(4, 5));      

//Arrow Function
const square=(x)=>x*x;
console.log(square(2));

//Hoisting in function
hoistedFunction(); 
function hoistedFunction(){
    console.log("Hosted function");
}

//call back function
function fun1(callbackFun){
    console.log("Fun1 work...")
    callbackFun();
}

function fun2(){
    console.log("Fun2 work...");
}

fun1(fun2);
