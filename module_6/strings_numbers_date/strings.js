// const name='ayush';
// const repocount=50;
// console.log(name+repocount+" value");//ayush50 value

// console.log(`my name is ${name.toUpperCase()} and repocount is ${repocount}`);//use this method because here strings are 
// //interpolated

const gameName=new String('Ayush');
console.log(gameName)//[String:'Ayush']
console.log(gameName[0]);//A
console.log(gameName.__proto__);//{} PROTOTYPE have many methods we can invoke them
console.log(gameName.length);//5
console.log(gameName.charAt(2));//u
console.log(gameName.indexOf('y'));//1
console.log(gameName.substring(1,4));//yus
//.slice(start ind,end ind)->can take negative values
//.trim()->
//.replace("%20","-")->
//.includes("yus");->return true if it is present
//.split(' ')->based on separator
