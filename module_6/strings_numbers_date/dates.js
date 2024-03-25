//Dates


let myDate=new Date();
// console.log(myDate);//2024-03-18T09:11:53.128Z

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//object

// let myCreatedDate=new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023



// let myCreatedDate2=new Date(2023,0,23,5,6);
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate=new Date("01-14-2023");
// console.log(myCreatedDate.toDateString())


// let myTimeStamp=Date.now();
// console.log(myTimeStamp);//gives a value in millisecond
// console.log(myDate.getTime());

// console.log(Math.floor(Date.now()/1000));

//


// console.log(myDate);
// console.log(myDate.getMonth());

// console.log(`${myDate.getDay}`);


myDate.toLocaleString('default',{
    weekday:"short",
    

})

