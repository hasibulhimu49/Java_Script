//Synchronous,Asynchronous
// console.log("hello1");
// console.log("hello2");

// setTimeout(()=>{
// console.log("hello3");
// },5000);

// console.log("hello4");





//callbacks
// let sum = (a, b) => {
//   return a + b;
// };

// let details = (callback) => {
//   let result = callback(10, 20);
//   console.log("The sum is", result);
// };
// details(sum);





//callback hell
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data", dataId);

//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("data 1 fatching");
//   getData(2, () => {
//     console.log("data 2 fatching");
//     getData(3, () => {
//       console.log("data 3 fatching");
//       getData(4);
//       console.log("data 4 fatching");
//     });
//   });
// });








//Promise
// let promise=new Promise((resolved,reject)=>{
//   console.log("I am a promise");
//   //resolved("Successfull");
//   // reject("Some error");
// })




// Promise j vabe real world kaj kore

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }




//Use this way
// const getPromise=()=>{
//  return new Promise((resolved,reject)=>{
//   console.log("I am a promise");
//   resolved("Successfull");
//   //reject("Error");
// });
// };

// let promise=getPromise(res);
// promise.then(()=>{
//   console.log("Fullfilled",res);
// });

// promise.catch((err)=>{
//    console.log("error occered",err);
// })




// //Promise Chaining
// function asyncFun1(){
//   return new Promise((resolved,reject)=>{
//     setTimeout(()=>{

//       console.log("Data1");
//       resolved("Succcess");

//     },4000)
//   })
// }


// function asyncFun2(){
//   return new Promise((resolved,reject)=>{
//     setTimeout(()=>{

//       console.log("Data2");
//       resolved("Succcess");

//     },4000)
//   })
// }


// console.log("Data 1 fatching")
// let p1=asyncFun1();
// p1.then((res)=>{
//   console.log(res);
//   console.log("Data 2 fatching")
//   let p2=asyncFun2();
//   p2.then((res)=>{
//      console.log(res);
//   })
// })

// console.log("Data 2 fatching")
// let p2=asyncFun1();
// p2.then((res)=>{
//   console.log(res);
// })




//async-await

// function api(){
//   return new Promise((resolved,reject)=>{
//     setTimeout(()=>{

//       console.log("Weather data");
//       resolved(200);

//     },4000)
//   })
// }

// async function getWeatherData(){
//  await api();
//  await api();
// }

//IIFE--Only for one time use - do not need to call function
// (async function (){
//  await api();
//  await api();
// })();
