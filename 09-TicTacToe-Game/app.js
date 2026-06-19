let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn")
let msgContainer=document.querySelector(".msg-container")
let startbtn=document.querySelector(".start-btn")
let message=document.querySelector(".msg")
let main=document.querySelector("main")



let turn0=true;

let pattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



const disalbedBoxes=()=>{
    for(b of boxes){
        b.disabled=true;
    }
}

const enabledBoxes=()=>{
    for(b of boxes){
        b.disabled=false;
        b.innerText="";
    }
}

const resetFunction=()=>{
    turn0=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("game-finished")
}

const startFunction=()=>{
    enabledBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("game-finished")
}



boxes.forEach((box)=>{
 let b= box.addEventListener("click",()=>{

    console.log("Box was clicked");
    if(turn0){
        box.innerText= "O";
        turn0=false;
    }else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;

    checkWinner();
 });
});


const showWinner=(winner)=>{

    message.innerText= `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("game-finished")
    disalbedBoxes();

}

const checkWinner=()=>{
    for(let p of pattern){
       let posVal1=boxes[p[0]].innerText;
     let posVal2=boxes[p[1]].innerText;
       let posVal3=boxes[p[2]].innerText;

       if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if(posVal1===posVal2 && posVal2==posVal3){
            console.log("Winner",posVal1);
            showWinner(posVal1);
        }
    }
    
    }
}


startbtn.addEventListener("click", startFunction);
resetBtn.addEventListener("click", resetFunction);