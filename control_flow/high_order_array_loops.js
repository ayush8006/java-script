//for of loop->array secific loop

//array of strings
//["" , "" , ""]

//array of objects
//[{},{},{}]

// const arr=[1,2,3,4,5]

// for (const iterator of arr) {

//     console.log(iterator);
    
// }

// const greetings="hello ayush!"

// for (const greet of greetings) {

//     console.log(`each char is ${greet}`);    
// }



//maps


// const map=new Map();

// map.set('IN',"india");
// map.set("usa","united state");
// map.set("fr","france");

// console.log(map);

// for (const key of map) {

//     console.log(key);
    
// }

// for (const [key,value] of map) {
    
//     console.log(value);
// }


// const myObj={
//     'game1':'NFS',
//     'game2':'Nfs2',
// }
// for (const [key,value] of myObj) {

//     console.log(key);//not iterable
    
// }

//for in loop for objects
// const myobj={
//     js:"javascript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for (const key in myobj) {

//     console.log(key);
    
// }

// for (const key in myobj) {

//     console.log(myobj[key]);
    
// }


//for in loop in arrays

// const programing=["js","rb","py","java","cpp"];

// for (const key in programing) {
//     console.log(key);//0,1,2,3,4
// }
// for (const key in programing) {
//     console.log(programing[key]);//js,rb,...
// }


//maps are not iterable by for in loop for in loop will print nothing




//for each loop->higher order function

function printme(item){
    console.log(item);
}

const coding=["js","ruby","java","python"]

// coding.forEach( function (item) {//call back function as it is high order so no name

//     console.log(item);
// })
//arrow fxn can be used as callback

// coding.forEach((item)=>{
//     console.log(item);
// })

//a normal function can be passed as refernce only
//coding.forEach(printme)


//not only item we got we also got an index,arr list

//  coding.forEach((item,index,arr)=>{
//      console.log(item,index,arr);
//  })




//[{},{},{},..]

const myCoding=[
    {
        languageName:"javascript",
        languagefilename:"js"
    },
    {
        languageName:"python",
        languagefilename:"py"
    },
    {
        languageName:"c++",
        languagefilename:"cpp"
    },
];

myCoding.forEach((item)=>{
    console.log(item.languageName);
})







