//object fish teke property daktecco
//variable dktecci nh
//OBJECT destructuring 
const fish ={
    name:'king hilsa',
    color:'Silver',
    address:'chadpur',
    seize:10,
    price:2000,
    phone:'01735332842'

    
}
// const phone=fish.phone;
// const name=fish.name;
// const color=fish.color;
// const price=fish.price;
const {phone}= fish;

console.log(fish.phone)
console.log(fish.phone)
console.log(fish.phone)
console.log(fish.phone)
console.log(fish.phone)
const fish1={name:'ilish',border:'india',jabo:'klke',vllgenh:'jnina',}
const {vllgenh}=fish1;
console.log(vllgenh)
//array destructuring

const [first,second,third,forth,fifth,sixth]=[2,3,4,5,6,66,6,6,7,7,];
console.log(fifth,first);

function getNames(){
    return['alim','halim']
}
const[baba,caha]=getNames();
console.log(caha,baba)