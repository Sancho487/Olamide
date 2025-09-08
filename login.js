let container = document.getElementById("cover");
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("remember")
let button = document.getElementById("btn");

//event styling
button.addEventListener("click", modifypage);

//calling functions
function modifypage() {
    button.style.background = "green";
    username.style.border = "2px solid blue";
    password.style.border = "2px solid blue";
}

//Displaying input content on console using.value

function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    console.log("login btn was called");
    console.log("my username is ",username);
    console.log("my password is ",password);
    
};