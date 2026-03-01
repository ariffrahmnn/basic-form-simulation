// Targeting the Element!
let welcomeButton = document.querySelector("#loginButton");
let dynamicTitle = document.querySelector("h1");

//Adding logic into a function
function loginForm () {
    dynamicTitle.innerHTML = "Welcome to the form!";
};

//Adding listener to the element and call the function!
welcomeButton.addEventListener("click", loginForm);
