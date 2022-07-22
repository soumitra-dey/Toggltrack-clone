let btn=document.querySelector("#body3_btn");
let player=document.querySelector(".videolink");
let close=document.querySelector(".close")
btn.addEventListener("click",function(){
    player.classList.add("playvideo")
})
close.addEventListener("click", function(){
    player.classList.remove("playvideo")
})
