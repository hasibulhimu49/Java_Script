 //const URL = "https://jsonplaceholder.typicode.com/posts";
// const BASE_URL = "https://jsonplaceholder.typicode.com";

// let title=document.querySelector(".t1");
// let desc=document.querySelector(".d1");
// let btn=document.querySelector(".btn1");




// const getPost=async ()=>{
//      console.log("Getting data......");
//     let response=await fetch(`${BASE_URL}/posts`);
//     console.log(response);

//     let data=await response.json();
//     console.log();
//     title.innerText= data[10].title;
//     desc.innerText= data[10].body;
// }

// btn.addEventListener("click",getPost);







//Again Practice
// const Base_URL="https://jsonplaceholder.typicode.com";
const Base_URL="http://localhost:8080";

let title=document.querySelector(".t1");
let description=document.querySelector(".d1");
let button=document.querySelector(".btn1");


const getData=async ()=>{
    let response=await fetch(`${Base_URL}/api/v1/employee`);
    console.log(response)
    let result=await response.json();
    console.log(result);

    console.log(result[1].name)
    title.innerText=result[1].name;
    description.innerText=result[1].email;
}


let newDiv=document.createElement("div");


button.addEventListener("click",(x)=>{
    getData();
    newDiv.innerText="Clicked";
    document.body.prepend(newDiv);

})


// button.addEventListener("click",getData);




























