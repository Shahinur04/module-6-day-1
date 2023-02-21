// one parameter single line 
const value = num => num*5;
const value1=(num)=>num*4;

//empty parameter single line
const value3=()=> 96.69;

//simple arrow function
const value5=(x,y)=>x+y;
const result0=value5(5,7);
console.log(result0)





//multiline arrow function
const value6=(x,y,z)=>{
    const sum1=x+y;
    const sum2=y+z;
    const result=sum1+sum2/2;
    const result2=result*5;
    return result2;
}