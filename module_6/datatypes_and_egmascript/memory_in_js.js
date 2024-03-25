//stack and heap memory

//Stack-(for primitives)->copy is created
//Heap-(for nonprimitives)->change in original value


// let myYoutubeName="hiteshchaudhary.com";

// let anotherName=myYoutubeName;

// anotherName="chai aur code"

// console.log(anotherName);//chai aur code
// console.log(myYoutubeName);//hiteshchaudhary.com


let user1={
    email:"ayush@gamil.com",
    upi:"ayush@ybl",
}

let user2=user1;

user2.email="ayush@google.com";

console.log(user1.email);//ayush@google.com
console.log(user2.email);//ayush@google.com


