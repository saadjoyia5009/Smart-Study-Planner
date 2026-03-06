function register(){

let user=document.getElementById("newUser").value
let pass=document.getElementById("newPass").value

localStorage.setItem("username",user)
localStorage.setItem("password",pass)

alert("Registered Successfully")

window.location="index.html"

}

function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

let storedUser=localStorage.getItem("username")
let storedPass=localStorage.getItem("password")

if(user===storedUser && pass===storedPass){

window.location="dashboard.html"

}

else{

alert("Invalid Login")

}

}

function logout(){

window.location="index.html"

}