let choices = document.querySelectorAll(".img");
let msg = document.querySelector(".winner");
let users = document.querySelector(".UserScoreboard");
let comps = document.querySelector(".CompScoreboard");

let userscore = 0 ;
let compscore=0;
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let select = choice.getAttribute("id");
        console.log(select);
        evaluate(select)
    })
})
let evaluate = (select)=>{
let compch =["rock","paper","scissor"];
let random =Math.floor(Math.random()*3);
let final = compch[random];
console.log(final);
if ( select===final) msg.innerText=" Game drawn";
else if ( select==="rock"){
Rock(select ,final);
}
else if ( select==="paper"){
    paper(select , final);
   }
   else if ( select==="scissor"){
    scissor(select , final);
   }
}
Rock=(select ,final) =>{
final == "scissor"?msg.innerText=`${select} won , Computer chose ${final}`: msg.innerText=`${select} lose , Computer chose ${final}`;
final == "scissor"?userscore++ : compscore++;
users.innerText=userscore;
comps.innerText=compscore;
}
paper=(select,final)=>{
final == "scissor"?msg.innerText=`${select} lost , Computer chose ${final}`: msg.innerText=`${select} won , Computer chose ${final}`;
final == "scissor"?compscore++:userscore++;
users.innerText=userscore;
comps.innerText=compscore;
}
scissor=(select,final)=> {
    final == "rock"?msg.innerText=`${select} lost , Computer chose ${final}`: msg.innerText=`${select} won ,Computer chose ${final}`;
    final == "rock"?compscore++ : userscore++;
    users.innerText=userscore;
    comps.innerText=compscore;
}
