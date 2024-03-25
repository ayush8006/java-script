//singleton object

 const tinderuser=new Object();//->singleton object
// console.log(tinderuser);//{}

// // const tinderuser2={};//->non singleton object
// // console.log(tinderuser2);//{}


tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false
// console.log(tinderuser);



// const regularUser={
//     email:"some@gmail.com",
//     full_name:{
//         userfullname:{
//             first_name:"ayush",
//             last_nmae:"goyal",
//         }
//     }
// }


// console.log(regularUser.full_name?.first_name);//undefined

// //full chaining

// //add more prtection by ?
// console.log(regularUser.full_name?.userfullname.first_name);



const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2};
// console.log(obj3);//{obj1:{...},obj2:{...}} -> can be problematic

// const obj3=Object.assign({},obj1,obj2);//{}->this is an optional parameter
// console.log(obj3);//

// const obj3={...obj1,...obj2};//spread the values
// console.log(obj3);


//array of objects

const users=[
    {
        id:1,
        email:"a@gmail.com",
    },
    {
        id:2,
        email:"ay@gmail.com",

    },
    {
        id:3,
        email:"ayu@gmail.com",

    },
]

//console.log(users[1].email);

console.log(Object.keys(tinderuser)); 

console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));//gives key value pairs in the form of an array

console.log(tinderuser.hasOwnProperty('isLoggedIn'));//true