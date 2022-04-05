let userName = "John";

function showMessage() {
    userName = "Bob";

    let message = "Hello, " + userName;
    alert(message);
}

alert(userName); // Jhon
showMessage(); //"Hello, John";
alert(userName); //Bob

