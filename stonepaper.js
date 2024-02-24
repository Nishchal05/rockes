let userscore=0;
let compscore=0;
const chose=document.querySelectorAll(".rock");
const move=document.querySelector(".move");
const usermark=document.querySelector(".user-score");
const compmark=document.querySelector(".comp-score");
const compchoice=()=>{
    const opt=["Rock","Paper","Scissor"];
    const index=Math.floor(Math.random()*3);
    const optindex=opt[index];
     return optindex;
}
const Result=(ch)=>{
    const option = compchoice();
    console.log(option);
    console.log(ch)
    if(option===ch){
        move.innerText="DRAW!"
    }
    else if(option==="Rock"&&ch==="Paper"){
        move.innerText=`WOW USER WON, USER CHOICE ${ch} AND COMP CHOICE ${option}`;
        userscore++;
        usermark.innerText = userscore;
    }
    else if(option==="Paper"&&ch==="Rock"){
        move.innerText=`WOW COMP WON , COMP CHOICE ${option} AND USER CHOICE ${ch}`
        compscore++;
        compmark.innerText=compscore;
    }
    else if(option==="Paper"&&ch==="Scissor"){
        move.innerText=`WOW USER WON, USER CHOICE ${ch} AND COMP CHOICE ${option}`;
        userscore++;
        usermark.innerText=userscore;
    }
    else if(option==="Scissor"&&ch==="Paper"){
        move.innerText=`WOW COMP WON , COMP CHOICE ${option} AND USER CHOICE ${ch}`
        compscore++;
        compmark.innerText=compscore;
    }
    else if(option==="Rock"&&ch==="Scissor"){
        move.innerText=`WOW COMP WON , COMP CHOICE ${option} AND USER CHOICE ${ch}`
        compscore++;
        compmark.innerText=compscore;
    }
    else if(option==="Scissor"&&ch==="Rock"){
        move.innerText=`WOW USER WON, USER CHOICE ${ch} AND COMP CHOICE ${option}`;
        userscore++;
        usermark.innerText=userscore;
    }
    
}
chose.forEach((ch) => {
    ch.addEventListener("click" , () => {
        const userchoice=ch.getAttribute("id");
        Result(userchoice);
    })
})
