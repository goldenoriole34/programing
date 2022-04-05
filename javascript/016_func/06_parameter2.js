function showMessage (from, text) {
    from =  + from + '*';
    alert(from + " : " + text);
}

let from = "Ann";
showMessage(from, "Hello"); // *Ann* : hello

alert(from); //Ann