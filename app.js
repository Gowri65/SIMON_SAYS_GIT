let gamesequence = [];
let usersequence = [];
let h3 = document.querySelector("h3");
let btnblue = document.querySelector(".blue");
let btnpink = document.querySelector(".pink");
let btnyellow = document.querySelector(".yellow");
let btngreen = document.querySelector(".green");
let i=0;
let started = false;
let colors = [btnblue,btnpink,btnyellow,btngreen]; 
function random_cg(){
    i++;
h3.innerText = `level ${i}`;
let randc = Math.floor(Math.random()*colors.length);
let color = colors[randc];
btnflash(color);
gamesequence.push(color.id);
console.log(gamesequence);
}
function btnflash(btn){
btn.classList.add("flash");
 setTimeout(function(){
        btn.classList.remove("flash")
       },500);
}
function userbtnflash(btn){
btn.classList.add("userflash");
 setTimeout(function(){
        btn.classList.remove("userflash")
       },500);
}
function checkAns(idx){
    if(gamesequence[idx] === usersequence[idx]){
       if(usersequence.length== gamesequence.length){
        usersequence = [];
        setTimeout(() => {
            random_cg();
        }, 1000);
       }
    }
    else{
        h3.innerHTML = `You Lost! Your score is : ${gamesequence.length-1} <br> press
        any key to continue`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset();
    }
}
window.addEventListener("keydown",function(){
    if(started== false){
        random_cg();
    }
    started = true;
})
let allbtns = document.querySelectorAll(".btn");
for( let bt of allbtns){
bt.addEventListener("click",function(){
    userbtnflash(bt);
usersequence.push(bt.id);
checkAns(usersequence.length-1);
})
}
function reset(){
    started = false;
    usersequence = [];
    gamesequence = [];
    i=0;
}