//if

// if(condition){

// }


// const isUserLoggedIn=true;

// if(isUserLoggedIn){

// }

// <,>,<=,>=,==,!=,===,!==(conditional operators)


//implicit scope

const balance=1000;
// if(balance>500) console.log("test"),// , is must but this is not used generally

// console.log("test2");//; is must



/**************   switch case  ****************/

// switch(key){
//     case value:
//         break;
//     case value:
//         break;
//     case value:
//         break;

//     default:
//         break;
// }

/**************   truthy and falsy values  ****************/

// const userEmail="ayush@gmail.com"

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     onsole.log(" not got user email");
// }

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values

//"0","false"," ",{},[],function(){}


//checking empty array
// let userEmail=[]

// if(userEmail.length===0){
//     console.log("array is empty");
// }


//checking empty object

// let emptyobj={}

// if(Object.keys(emptyobj).length===0){
//     console.log("empty object");
// }


/**************  nullish coalescing operator (??) : null undefined ****************/

let val1;

//val1=5??10;//5

//val1=null??3;//3

val1=undefined??4;//4

console.log(val1);





