let btn=document.querySelector("#body3_btn");
let player=document.querySelector(".videolink");
let close=document.querySelector(".close")
btn.addEventListener("click",function(){
    player.classList.add("playvideo")
})
close.addEventListener("click", function(){
    player.classList.remove("playvideo")
})


let product=document.querySelector(".product")
let navbar=document.querySelector(".sec1")
let pro_submenu=document.querySelector(".submenubox")
let ind=0;
product.addEventListener("click", function(event){
    event.preventDefault()
    if (ind==0){
        pro_submenu.classList.add("pro_submenu_on");
        navbar.classList.add("afterclick");
        why_submenu.classList.remove("why_submenu_on");
        career_submenu.classList.remove("car_submenu_on");
        product2_submenu.classList.remove("pro2_submenu_on");
        ind=1
    } else{
        pro_submenu.classList.remove("pro_submenu_on");
        navbar.classList.remove("afterclick");
        ind=0
    }
})
let why_track=document.querySelector("#why_track")
let why_submenu=document.querySelector(".submenu2")
let ind2=0;
why_track.addEventListener("click", function(event){
    event.preventDefault()
    if (ind2==0){
        why_submenu.classList.add("why_submenu_on");
        navbar.classList.add("afterclick");
        pro_submenu.classList.remove("pro_submenu_on");
        career_submenu.classList.remove("car_submenu_on");
        product2_submenu.classList.remove("pro2_submenu_on");
        ind2=1
    } else{
        why_submenu.classList.remove("why_submenu_on");
        navbar.classList.remove("afterclick");
        ind2=0
    }
})
let career=document.querySelector("#career")
let career_submenu=document.querySelector(".submenu3")
let ind3=0;
career.addEventListener("click", function(event){
    event.preventDefault()
    if (ind3==0){
        career_submenu.classList.add("car_submenu_on");
        navbar.classList.add("afterclick");
        pro_submenu.classList.remove("pro_submenu_on");
        why_submenu.classList.remove("why_submenu_on");
        product2_submenu.classList.remove("pro2_submenu_on");
        ind3=1
    } else{
        career_submenu.classList.remove("car_submenu_on");
        navbar.classList.remove("afterclick");
        ind3=0
    }
})
let product2=document.querySelector("#product2")
let product2_submenu=document.querySelector(".top_pro_submenu")
let ind4=0;
product2.addEventListener("click", function(event){
    event.preventDefault()
    if (ind4==0){
        product2_submenu.classList.add("pro2_submenu_on");
        navbar.classList.add("afterclick");
        career_submenu.classList.remove("car_submenu_on");
        pro_submenu.classList.remove("pro_submenu_on");
        why_submenu.classList.remove("why_submenu_on");
        ind4=1
    } else{
        product2_submenu.classList.remove("pro2_submenu_on");
        navbar.classList.remove("afterclick");
        ind4=0
    }
})