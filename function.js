//function declaration
//regular function with variable

function calculate(sum1,sum2) {
    const sum=sum1+sum2;
    return sum;
}
//call a function
const result=calculate(96,69);
// console.log(result)

// without use variable function 

function add(sum3,sum4){
    const total=sum3+sum4;
    return total;
}
const totalResult=add(99,98)
// console.log(totalResult);

//function expression e const +variable tkbbe

const add1=function add1(math1,math2){
const total = math1+math2;
return total;
}
const number =add1(2,5);
console.log(number)

//function anonymus

const add2=function (math1,math2){
const total = math1+math2;
return total;
}
const number1 =add2(2,5);
//console.log(number)
const add3=function (math1,math2){
return math1+math2;
}
const number3 =add3(2,5);
//console.log(number)

// arrow function=>

const add4=(math1,math2)=>math1+math2;
const result1 =add4(2,5);
console.log(number)