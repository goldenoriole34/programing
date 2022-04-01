var fs = require("fs");

console.log("Going to get fileinfo!");
fs.stat('input.txt', function(err, stats){
    if(err) {
        return console.error(err)
    }
    console.log(stats);
    console.log("Got file info!");


    //check file type
    console.log("is File? " + stats.isFile());
    console.log("is Directory? " + stats.isDirectory());

});