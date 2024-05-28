let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winnpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText=("O");
            box.style.color="green";
            turnO=false;
        }else{
            box.innerText=("X");
            box.style.color="blue";
            turnO="true";           
        }
        box.disabled= true;
        checkwinner();
    });
});


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.enable=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;   
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner=()=>{
    for(let pattern of winnpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }           
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
restbtn.addEventListener("click",resetgame);


