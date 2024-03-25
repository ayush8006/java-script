//when we don't know the exact number of parameters

// function calculateCartPrice(num1,num2){
//     return num1+num2;
// }

// console.log(calculateCartPrice(100,200,300,400));//300 ->wrong o/p

//to handle this we have rest operator which is same as spread operator it will differ
//only depending upon the usecase

// function calculateCartPrice(...num1){
//         return num1;    
// }
// console.log(calculateCartPrice(200,300,400));//[200,300,400]
//converted into an array



//scopes-> local and global scope in javascript

// let a=10;
// const b=20;
// var c=30;

// console.log(a);
// console.log(b);
// console.log(c);


// if(true){
//     //block scope
// let a=10;
// const b=20;
// var c=30
// }
//console.log(a);//gives error
//console.log(b);//gives error
//console.log(c);//30->can be problematic


//nested scopes

// function one(){
//     const username="hitesh"

//     function two(){
//         const website="youtube";
//         console.log(username);
//     }

//    // console.log(website);
//     two();
// }
// one();



/************* interesting   ************/

console.log(addone(8));//9
function addone(num){//this is simple function 
    return num+1;
}
addone(6);

console.log(addtwo(9));//givess error->(hoisting)->(execution context)
const addtwo=function(num){//this is expression in js variables are very powerful can hold any 
    //values
    return num+2;
}
addtwo(7);