let user_email=document.querySelector("#email")
let user_password=document.querySelector("#password")
let alert_messege=document.querySelector("#messege")

document.querySelector("#btn").addEventListener("click", function(){
    if (user_email.value=="" || user_password.value=="") {
        alert_messege.innerText="Please filled all"
    } else {
        localStorage.setItem("username", user_email.value)
        localStorage.setItem("password", user_password.value)
        alert_messege.innerText="Signup successful"
    }
})