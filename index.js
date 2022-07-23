let btn=document.querySelector("#body3_btn");
let player=document.querySelector(".videolink");
let close=document.querySelector(".close")
btn.addEventListener("click",function(){
    player.classList.add("playvideo")
})
close.addEventListener("click", function(){
    player.classList.remove("playvideo")
})


let menu=document.querySelector(".rightbar")
let bar1=document.querySelector(".navbarlist")
let bar2=document.querySelector(".navbarlist2")
let ind=0
menu.addEventListener("click", function(event){
    event.preventDefault()
    if (ind==0){
        bar1.classList.add("mainmenu")
        bar2.classList.add("mainmenu")
        navbar.classList.add("afterclick");
        pro_submenu.classList.remove("pro_submenu_on");
        why_submenu.classList.remove("why_submenu_on");
        career_submenu.classList.remove("car_submenu_on");
        product2_submenu.classList.remove("pro2_submenu_on");
        ind=1
    } else{
        bar1.classList.remove("mainmenu")
        navbar.classList.remove("afterclick");
        bar2.classList.remove("mainmenu")

        ind=0
    }
})


let product=document.querySelector(".product")
let navbar=document.querySelector(".sec1")
let pro_submenu=document.querySelector(".submenubox")
let ind1=0;
product.addEventListener("click", function(event){
    event.preventDefault()
    if (ind1==0){
        pro_submenu.classList.add("pro_submenu_on");
        navbar.classList.add("afterclick");
        why_submenu.classList.remove("why_submenu_on");
        career_submenu.classList.remove("car_submenu_on");
        product2_submenu.classList.remove("pro2_submenu_on");
        ind1=1
    } else{
        pro_submenu.classList.remove("pro_submenu_on");
        navbar.classList.remove("afterclick");
        ind1=0
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