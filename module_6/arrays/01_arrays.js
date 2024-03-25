//const myarr=[0,1,2,"swd",true];
// console.log(myarr);
// myarr.push(8);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);
// myarr.unshift(9);
// console.log(myarr);
// myarr.shift();
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));


// const newarr=myarr.join();
// console.log(newarr);
// console.log(typeof newarr);

//slice ,splice

// console.log("a",myarr);//a [0,1,2,'swd',true]

// const myn1=myarr.slice(1,3);
// console.log("b",myarr);//b [0,1,2,'swd',true]

// const myn2=myarr.splice(1,3);
// console.log("c",myarr);//c [0,true]

// console.log(myn1);//[1,2]
// console.log(myn2);//[1,2,'swd']


// const marvel_heros=["thor","ironman","spiderman"];
// const dc=["superman","flash","batman"];

// marvel_heros.push(dc);
// console.log(marvel_heros);

// const all_heros=marvel_heros.concat(dc);
// console.log(all_heros);

// const all_h=[...marvel_heros, ...dc];
// console.log(all_h)

// const arr1=[1,2,3,[4,5],6,[7,8]];
// const arr2=arr1.flat(Infinity);
// console.log(arr2);

console.log(Array.isArray("hitesh"));//false
console.log(Array.from("hitesh"));

console.log(Array.from({name:"ayush"}));//interesting->[]

console.log(Array.of(100,200,399))