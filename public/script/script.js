// Targeting the Element!
let welcomeButton = document.querySelector("#loginButton");
let dynamicTitle = document.querySelector("h1");
let formHidden = document.querySelector(".form-login")
let notification = document.querySelector("#notif")
let correctUsername = 'arifRahman';
let correctPassword = 'arif123';

//Adding logic into a function
function loginForm () {

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let reminder = notification

    
    if (username === correctUsername && password === correctPassword) {
        notification.innerHTML = 'Login Succesfully! Redirecting...';
        notification.style.color = 'green';

        setTimeout(function () {
            window.location.href = 'home.html';
        }, 2000);
        
    } else if (username === '' || password === '') {
        reminder.textContent = 'Field cannot be empty';
        reminder.style.color = 'red'

    } else if (username !== correctUsername || password === correctPassword) {
        reminder.textContent = 'Username or Password incorrect';
        reminder.style.color = 'red'
    
    }
    

};

//Adding listener to the element and call the function!
welcomeButton.addEventListener("click", loginForm);
