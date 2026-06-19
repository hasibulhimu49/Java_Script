// ALL boxes
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("dblclick", () => {
        console.log("Double Click:", box.innerText);
    });

});



// ONLY main button
let btn = document.querySelector(".main-btn");


btn.addEventListener("click", () => {
    console.log("Button clicked");
});






