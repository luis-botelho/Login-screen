var btnSignin = document.querySelector("#sign-in");
var btnSignup = document.querySelector("#sign-up");
var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
