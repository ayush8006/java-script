// const num=400;
 const balance=new Number(400);
// console.log(typeof balance);//object
// console.log(balance);//[Number:400]
// console.log(balance.toString());//400
// console.log(typeof balance.toString());//string
// console.log(typeof balance);//object

// console.log(balance.toString().length);


//console.log(balance.toFixed(2));//400.00

// const othnum=48.989732;
// console.log(othnum.toPrecision(4));//48.99
// console.log(othnum.toPrecision(2));//49

// const hundreds=10000000;
// console.log(hundreds.toLocaleString());//1,00,00,000
// console.log(hundreds.toLocaleString('en-US'));//10,000,000

/************** Maths  *************/


// console.log(Math);//Object [Math] {}->we can access its methods

// console.log(Math.abs(-2));//2
// console.log(Math.round(9.03));//9
// console.log(Math.ceil(9.2));//10
// console.log(Math.floor(2.9));//2

//Math.min(),.max(),.random()

// console.log(Math.random());//gives differ value b/w 0 and 1

// console.log(Math.floor(Math.random()*10)+1);//random value b/w 1 and 10

const min=10;
const max=29;

console.log(Math.floor(Math.random()*(max-min+1))+min);//random value b/w 10 and 29






