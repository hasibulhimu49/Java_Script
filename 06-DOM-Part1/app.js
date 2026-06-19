
// let header=document.getElementById("#header2");
// let header=document.getElementsByClassName(".header3");

let header=document.querySelector("#header2");
console.dir(header);
console.log(header.tagName);
console.log(header.textContent)
header.textContent="Changing by context";
console.log(header.textContent)

header.innerHTML= "<i>Hello everyone</i>";
header.style.backgroundColor = "yellow";



let headers3=document.querySelectorAll(".header3");
headers3.forEach((x)=>{
    // x.innerHTML="<i>Ami From Dhaka</i>";
    x.innerText="From Dhaka";
    x.style.backgroundColor = "red";

});




