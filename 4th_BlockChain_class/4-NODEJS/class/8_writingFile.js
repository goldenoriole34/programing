var fs = require("fs");

console.log("Going to write into existing file!");
fs.writeFile('input2.txt', 'Simply Easy ABC!', function(err){
    if(err) {
        return console.error(err)
    }
    console.log("Data written!");
    console.log("Let's read newly written data");

    fs.readFile('input2.txt', function(err, data){
        if(err){
            return console.error(err);
        }
        console.log("Asyncronuse read : " + data.toString());
    });
});