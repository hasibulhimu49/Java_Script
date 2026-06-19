
// function sumFun(a,b) {
//      console.log("This is Function");
//     return a+b;
 
// }


//Arrow Function
// sumFun=(a,b)=>{
//     console.log("This is Function");
//     return a+b;
// }

sumFun=(a,b)=> a+b;

let result=sumFun(26,30);
console.log(result);


//Callback Function
function sum(a,b){
    return a+b;
}

function performance(name,sum)
{
    let r=sum(10,20);
    let result= `Hey, ${name} your performance is good because u achieve total ${r}`;
    console.log(result);
}

performance("Mohammad Hasibul Hasan",sum);




//For each array method

let fruits=["apple","Orange","Banana"];

fruits.forEach(function(f){
console.log(f);
});



//map,filter,reduce
let num=[1,2,3,4,5];

let r1=num.map((x)=>x+2);
console.log(r1);

let r2=num.filter((x)=>x>=4);
console.log(r2);

// let r3=num.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(r3);

//short version
let r3 = num.reduce((acc, curr) => acc + curr, 0);
console.log(r3)