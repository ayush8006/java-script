//primitive and non primitive data types


/* they are categorised based on how they are stored in memory and how they are accessed from the memeory */

//primitives
//when we assigh them then a copy is created and whenwe make change the change will be done
//inside the copy

//7 types: String ,Number, Boolean, null , undefined , Symbol, BigInt

//Reference types(non primitives)

//Array,Objects,functions

//js is dynamically typed or statically typed?


//examples:primitive

// const score=100;
// const scorevalue=100.9;

// const isloggedIn=false;

// const outsideTemp=null
// let usermail;//undefined

// const id=Symbol("123");
// const anotherid=Symbol("123");
// console.log(id);//Symbol(123)
// console.log(anotherid);//Symbol(123)

// console.log(id===anotherid);//false

// const bigNum=89223778691720972n//bigInt
//console.log(typeof bigNum);//undefined

//examples:non-primitive

const heros=["bdjhjah",9,false];
console.log(typeof heros[0]);//object
console.log(typeof heros);//string

let myobj={
    name:"ayush",
    age:19,
}
console.log(typeof myobj);//object

const myfun=function(){
    console.log("hello world");
}
console.log(typeof myfun)//function (actually function object)






