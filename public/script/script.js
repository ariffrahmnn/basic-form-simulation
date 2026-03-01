let welcomeButton = document.querySelector("button");
let dynamicTitle = document.querySelector("h1");

welcomeButton.addEventListener("click", function(){
    dynamicTitle.innerHTML = "Welcome to the form!";
})