//function

// function sayMyName(){
//     console.log("a");
//     console.log("y");
//     console.log("u");
//     console.log("s");
//     console.log("h");
// }

// sayMyName();//execution of function
// sayMyName;//reference of function



// function add2num(num1,num2){//parameters
//     console.log(num1+num2);
// }
// add2num(1,1);//2      (1,1) are arguments
// add2num(1,"2");//12
// add2num(1,"a");//1a
// add2num(1,null);//1

//difference b/w return type of func and simple console.log() 


// function loginUserMessage(userName){

//     return `${userName} just logged in`
// }
//  loginUserMessage("ayush")//does nothing
//  console.log(loginUserMessage("hitesh"));//hitesh just logged in

// console.log(loginUserMessage());//undefined just logged in so we can check by simple if - else


// function loginUserMessage(userName){

//     if(userName===undefined){
//         console.log("please enter a username");
        
//     }
//     else 
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage());



//default parameter
function loginUserMessage(userName="user"){

    if(!userName){
        console.log("please enter a username");
        
    }
    else 
    return `${userName} just logged in`
}

console.log(loginUserMessage());