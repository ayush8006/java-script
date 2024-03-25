const coding=["js","ruby","java","python"]

//for each loop will not return anything

// const values=coding.forEach((item)=>{
    
// })

// console.log(values);//undefined

// const values2=coding.forEach((item)=>{
    
//     return item;
// })
// console.log(values);//undefined


// const mynums=[1,2,3,4,5,6,7,8,9];


// const newnums=mynums.filter((num)=>(num>5));
// console.log(newnums);//[6,7,8,9]
 //for implicit return use()

// const newnums2=mynums.filter((num)=>{
//     return num>4;
// });

// console.log(newnums2);//[5,6,7,8,9]

//doing this uding for each

// const newnums=[];

// mynums.forEach((item)=>{
//     newnums.push(item);
// })
// console.log(newnums);4

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbooks=books.filter((bk)=>{
//     return bk.genre==='History';
//   })
  //console.log(userbooks);

//   const userbooks2=books.filter((bk)=>{
//     return bk.publish>= 2000;
//   })
//   console.log(userbooks2);




/************** map*************/
// mynums.map((nums)=>(nums+10));
// console.log(mynums);//no change

// const mynewnums=mynums.map((nums)=>(nums+10));
// console.log(mynewnums);//changed



/************* chaining *************/

// const mynewnums = mynums
//                   .map((nums)=>(nums*10))
//                   .map((num)=>num+1)
//                   .filter((num)=>num>=40);
//   console.log(mynewnums);//[41,51,61,71,81,91]               




/***************reduce*********** */

const mynums=[1,2,3,4,5,6,7,8,9];


// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc is:${acc}`);
//     return acc+currval
// },0);

// const mytotal=mynums.reduce((acc,curr)=>acc+curr,0);
// console.log(mytotal);//45


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totprice=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totprice);