//this->refering to current context


// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMess:function(){
//         console.log(`${this.username},welcome to website`);

//         console.log(this);
//     }
// }


//  user.welcomeMess();
//  user.username="ayush";
//  user.welcomeMess();

//  console.log(this);//{}->in node environment ->global object
 //window object in window environment
 //in browser environment the global object is window object


//  function chai(){
//     let username="ayush";
//     console.log(this)
//     console.log(this.username);//undefined   do not work inside function

//  }

//  chai();



/*********  arrow function  *********/


//chai();//gives error

// const chai=()=>{
//     let username="ayush";

//     console.log(this);//{}
//     console.log(this.username);//undefined

// }

// chai();

//simple arrow function
const add2=(num1,num2)=>{

    return num1+num2;
}

//implicit return

// const add3=(num1,num2,num3) => (num1+num2+num3);

// console.log(add3(1,2,3));

//retruning an object throw an implicit arrow function (wrap in parenthesis)

const user=(name)=>({username:`${name}`});

console.log(user("ayush"));

