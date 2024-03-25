//singleton object->when they are created by constructor
//Object.create
//we can create one instance of a class and that instance can be accessed globally


//object as literals
// const jsuser={
//     name:"ayush",//"name" considered as same
//     "full_name":"ayush goyal",
//     "last name":"goyal",
//     age:21,
//     location:"kkr",
//     email:"ayush@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"],
// }

//accessing objects

//console.log(jsuser.email);//ayush@gmail.com
//console.log(jsuser[email]);//gives error as email(key)  also stored as a string 
//console.log(jsuser["email"]);//ayush@gamil.com

//console.log(jsuser.full_name);//ayush goyal

//console.log(jsuser["full_name"]);//ayush goyal

//console.log(jsuser.last name);//there is no way to access this by . can only access by
//console.log(jsuser["last name"]);




/*******     creating  a symbol and using it as a key     *******/

// const mysym=Symbol("key1");
// const jsuser={
//     name:"ayush",//"name" considered as same
//     "full name":"ayush goyal",
//     //mysym : "mykey1",//it is not added key as a symbol
//     [mysym]:"mykey1",//now it is added symbol as a key  
        
// }
//console.log(jsuser[mysym]);//accessing a symbol

// console.log(typeof jsuser.mysym);

// jsuser.name="ayush_";//can change the object

// console.table(jsuser);

// //want to stop the change in the object

// Object.freeze(jsuser);

// jsuser.name="ayush__";





const jsuser={
        name:"ayush",//"name" considered as same
        "full_name":"ayush goyal",
        "last name":"goyal",
        age:21,
        location:"kkr",
        email:"ayush@gmail.com",
        isLoggedIn:false,
        lastLoginDays:["Monday","Saturday"],
    }
    
jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greeting2=function(){
    console.log(`hello js user ${this.name}`);

}

console.log(jsuser.greeting);//[Function (anonymous)]

console.log(jsuser.greeting());//hello js user     undefined

console.log(jsuser.greeting2());//hello js user ayush     undefined

