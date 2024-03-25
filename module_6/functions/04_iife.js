//immediately invoked function expressions(iife)

// function chai(){
//     console.log(`DB connected`);
// }

// chai();//DB connected

//to avoid pollution due to global scope and for immediate executon we use iife
(function chai(){//named iife
        console.log(`DB connected`);
})();//; is mendary here for seconf function execution

(()=>{
    console.log(`DB CONNECTED 2`)
})();//; is mandatory

((name)=>{
    console.log(`DB CONNECTED 3 ${name}`)
})("ayush");


